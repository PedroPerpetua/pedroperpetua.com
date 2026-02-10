import { useState } from 'react';
import { Button, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import FlagIcon from './FlagIcon';
import { availableLanguages } from '../../i18n';
import { languageNameFromCode } from './utils';

function LanguageSelector() {
  const { i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const flagEl = (<FlagIcon lngCode={i18n.language} />);

  return (
    <>
      <Button variant="outlined" onClick={e => setAnchorEl(e.currentTarget)} sx={{ minWidth: 'unset', px: 1 }}>
        { flagEl }
      </Button>
      <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        marginThreshold={0}
      >
        {
          availableLanguages.map(lngCode => (
            <MenuItem
              key={lngCode}
              onClick={() => {
                i18n.changeLanguage(lngCode);
                setAnchorEl(null);
              }}
            >
              <Stack direction="row" spacing={1}>
                <FlagIcon lngCode={lngCode} />
                <Typography>
                  { languageNameFromCode(lngCode) }
                </Typography>
              </Stack>
            </MenuItem>
          ))
        }
      </Menu>
    </>
  );
}

export default LanguageSelector;
