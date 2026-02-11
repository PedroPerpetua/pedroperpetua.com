import { useTranslation } from 'react-i18next';
import { useExperienceContext } from '../ExperienceContext';
import TimelineStep from '../TimelineStep';
import IstIcon from '../../../assets/ist.png';
import { universityTimelineId } from '.';

function UniversityTimelineStep() {
  const { t } = useTranslation();
  const { active, setActive } = useExperienceContext(universityTimelineId);
  return (
    <TimelineStep
      iconSrc={IstIcon}
      period={t($ => $.experience.university.timeline.period)}
      title={t($ => $.experience.university.timeline.title)}
      subtitle={t($ => $.experience.university.timeline.subtitle)}
      active={active}
      onClick={setActive}
    />
  );
}

export default UniversityTimelineStep;
