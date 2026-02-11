import { Box, Divider, Fade, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import ExperienceContext from './ExperienceContext';
import PerguntasQbPartTimeTimelineStep from './perguntasQb-part-time/PerguntasQbPartTimeTimelineStep';
import QubItInternshipTimelineStep from './qubIt-internship/QubItInternshipTimelineStep';
import TetrapiInternshipTimelineStep from './tetrapi-internship/TetrapiInternshipTimelineStep';
import { tetrapiJobTimelineId } from './tetrapi-job';
import TetrapiJobTimelineStep from './tetrapi-job/TetrapiJobTimelineStep';
import TimelineContainer from './TimelineContainer';
import UniversityTimelineStep from './university/UniversityTimelineStep';
import TetrapiJobContent from './tetrapi-job/TetrapiJobContent';
import TetrapiInternshipContent from './tetrapi-internship/TetrapiInternshipContent';
import QubItInternshipContent from './qubIt-internship/QubItInternshipContent';
import PerguntasQbPartTimeContent from './perguntasQb-part-time/PerguntasQbPartTimeContent';
import UniversityContent from './university/UniversityContent';

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
            <TimelineContainer>
              <TetrapiInternshipTimelineStep />
              <QubItInternshipTimelineStep />
              <UniversityTimelineStep />
              <TetrapiJobTimelineStep />
              <PerguntasQbPartTimeTimelineStep />
            </TimelineContainer>
            <Fade in={active === prevActive} onExited={() => setPrevActive(active)}>
              <Box>
                <TetrapiInternshipContent />
                <QubItInternshipContent />
                <UniversityContent />
                <TetrapiJobContent />
                <PerguntasQbPartTimeContent />
              </Box>
            </Fade>
          </Stack>
        </ExperienceContext.Provider>
      </Stack>
    </Box>
  );
}

export default Experience;
