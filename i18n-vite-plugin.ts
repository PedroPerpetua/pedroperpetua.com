/* This is a small plugin to run the i18n-cli extract & type generation on hot reload. */

import type { Plugin } from 'vite';
import { runExtractor, runTypesGenerator } from 'i18next-cli';
import type { Logger } from 'i18next-cli';
import config from './i18next.config';
import { minimatch } from 'minimatch';
import { relative } from 'node:path';
import chalk from 'chalk';

const pluginName = 'i18n-vite-plugin';

/* Logging */
const timeFormatter = new Intl.DateTimeFormat(undefined, {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
});
function formatMessage(message: string) {
  const timestamp = chalk.dim(timeFormatter.format(new Date()));
  return `${timestamp} ${chalk.bold(chalk.cyan(`[${pluginName}]`))} ${message}`;
}
const extractorLogger: Logger = {
  info(message) {
    console.log(formatMessage(message));
  },
  warn(message) {
    console.warn(formatMessage(chalk.yellow(message)));
  },
  error(message) {
    console.error(formatMessage(chalk.red(message)));
  },
};
const typesGeneratorLogger = { ...extractorLogger, info: () => { /* Disable this */ } };
/* --- */

type i18nVitePluginOptions = {
  debounceMs?: number
};

function i18nVitePlugin(opts?: i18nVitePluginOptions): Plugin {
  const debounceMs = opts?.debounceMs ?? 500;

  const globs = (Array.isArray(config.extract.input) ? config.extract.input : [config.extract.input]);

  let timer: NodeJS.Timeout | null = null;
  async function run() {
    const updated = await runExtractor(config, { quiet: true, logger: extractorLogger });
    if (!updated) return;
    await runTypesGenerator(config, { quiet: true, logger: typesGeneratorLogger });
    console.log(chalk.green(formatMessage('Successfully updated translations.')));
  }
  function schedule() {
    if (timer) clearTimeout(timer);
    timer = setTimeout(run, debounceMs);
  }

  return {
    name: pluginName,
    apply: 'serve',
    configureServer(server) {
      server.watcher.add(config.extract.input);
      // Run on start
      server.watcher.on('ready', () => schedule());
    },
    transform(_, id) {
      /*
      Run this on transform so that we know there were no compilation errors; if a file with
      translations fails to compile we don't run so we don't accidentally delete all the keys that
      file contained.
      */
      const relativePath = relative(process.cwd(), id);
      // Make sure we don't execute on the type outputs
      const outputs = [config.types?.output, config.types?.resourcesFile]
        .filter(v => v !== undefined);
      if (outputs.some(g => minimatch(relativePath, g))) return;
      // Run if we match any of the other inputs
      if (globs.some(g => minimatch(relativePath, g))) schedule();
    },
    handleHotUpdate({ file, server }) {
      if (file.includes('locales') && file.endsWith('.json')) {
        server.ws.send({
          type: 'custom',
          event: 'locales-updated',
        });
      }
    },
  };
}

export default i18nVitePlugin;
