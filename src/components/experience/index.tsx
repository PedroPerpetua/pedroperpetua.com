import { Box, Divider, Fade, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import ExperienceContext from './ExperienceContext';
import { tetrapiJobTimelineId } from './tetrapi-job';
import TimelineContainer from './TimelineContainer';

function Experience() {
  const [active, setActive] = useState(tetrapiJobTimelineId);
  const [prevActive, setPrevActive] = useState(tetrapiJobTimelineId);

  return (
    <Box component="section">
      <Stack spacing={3}>
        <Stack>
          <Typography variant="h2"> Work experience</Typography>
          <Divider />
        </Stack>
        <ExperienceContext.Provider value={{ active, prevActive, setActive }}>
          <Stack direction="row">
            <TimelineContainer />
            <Fade in={active === prevActive} onExited={() => setPrevActive(active)}>
              <Box />
            </Fade>
          </Stack>
        </ExperienceContext.Provider>
      </Stack>
    </Box>
  );
}

export default Experience;
