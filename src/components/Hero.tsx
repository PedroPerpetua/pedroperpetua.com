import { Box, Stack, Typography } from '@mui/material';
import ChibiImage from '../assets/chibi.png';
import { useTranslation } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();
  return (
    <Box>
      <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Stack>
          <Typography variant="h1">
            { t($ => $.hero.title) }
          </Typography>
          <Typography variant="h3">
            { t($ => $.hero.subtitle) }
          </Typography>
        </Stack>
        <Box component="img" src={ChibiImage} alt="PedroPerpetua" sx={{ width: '50%' }} />
      </Stack>
    </Box>
  );
}

export default Hero;
