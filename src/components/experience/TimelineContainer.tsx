import { Box, Stack } from '@mui/material';
import { Children, Fragment, type PropsWithChildren } from 'react';
import { iconWidth, periodWidth } from './timelineData';

export type TimelineContainerProps = PropsWithChildren;

function TimelineContainer({ children }: TimelineContainerProps) {
  const rows = Children.toArray(children);
  return (
    <Stack spacing={1}>
      {
        rows.map((row, i) => (
          <Fragment key={i}>
            { row }
            {
              i < (rows.length - 1) && (
                <Stack direction="row">
                  <Box sx={{ width: periodWidth }} />
                  <Box sx={[theme => theme.mixins.flexCenter, { width: iconWidth }]}>
                    <Box
                      sx={
                        {
                          height: 24,
                          width: 5,
                          backgroundColor: 'lightgray',
                          marginY: -1,
                        }
                      }
                    />
                  </Box>
                </Stack>
              )
            }
          </Fragment>
        ))
      }
    </Stack>
  );
}

export default TimelineContainer;
