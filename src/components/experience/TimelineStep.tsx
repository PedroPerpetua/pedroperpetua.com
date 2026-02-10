import { Box, Stack } from '@mui/material';
import GrowingTypography from '../styled/GrowingTypography';
import { iconWidth, maxTextWidth, periodWidth } from './timelineData';

type TimelineStepProps = {
  iconSrc: string,
  title: string,
  subtitle?: string,
  period?: string,
  active?: boolean,
  onClick?: () => void,
};

function TimelineStep({ period, iconSrc, title, subtitle, active, onClick }: TimelineStepProps) {
  const outerSize = active ? 80 : 64;
  const innerSize = active ? 64 : 48;

  return (
    <Stack
      direction="row"
      onClick={onClick}
      sx={{ cursor: 'pointer', alignItems: 'center' }}
    >
      <Box sx={{ width: periodWidth, textAlign: 'right', pr: 1 }}>
        <GrowingTypography grow={active}>
          { period }
        </GrowingTypography>
      </Box>
      <Box sx={[theme => theme.mixins.flexCenter, { width: iconWidth }]}>
        <Box
          sx={[
            theme => theme.mixins.flexCenter,
            {
              width: outerSize,
              height: outerSize,
              borderRadius: '100%',
              backgroundColor: 'lightgray',
              transition: theme => theme.transitions.create(['width', 'height']),
            },
          ]}
        >
          <Box
            sx={[
              theme => theme.mixins.flexCenter,
              {
                width: innerSize,
                height: innerSize,
                borderRadius: '100%',
                backgroundColor: 'white',
                overflow: 'hidden',
                transition: theme => theme.transitions.create(['width', 'height']),
              },
            ]}
          >
            <Box
              component="img"
              src={iconSrc}
              sx={{
                width: innerSize,
                height: innerSize,
                transition: theme => theme.transitions.create(['width', 'height']),
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ pl: 1, width: maxTextWidth }}>
        <GrowingTypography variant="h6" grow={active} growTo="1.5rem">
          { title }
        </GrowingTypography>
        <GrowingTypography grow={active}>
          { subtitle }
        </GrowingTypography>
      </Box>
    </Stack>
  );
}

export default TimelineStep;
