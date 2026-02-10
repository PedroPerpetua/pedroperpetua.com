import { Box, Stack, Typography } from '@mui/material';
import type { PropsWithChildren } from 'react';

type ExperienceContentProps = PropsWithChildren<{
  title: string,
  subtitle?: string,
  active?: boolean,
}>;

function ExperienceContent({ title, subtitle, active, children }: ExperienceContentProps) {
  if (!active) return null;
  return (
    <Stack>
      <Typography variant="h3">
        { title }
      </Typography>
      {
        subtitle && (
          <Typography variant="h6">
            { subtitle }
          </Typography>
        )
      }
      <Box>
        { children }
      </Box>
    </Stack>
  );
}

export default ExperienceContent;
