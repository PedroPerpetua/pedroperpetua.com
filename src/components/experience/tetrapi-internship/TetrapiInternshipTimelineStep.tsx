import { useTranslation } from 'react-i18next';
import { useExperienceContext } from '../ExperienceContext';
import { tetrapiInternshipTimelineId } from '.';
import TetrapiIcon from '../../../assets/tetrapi-cs.png';
import TimelineStep from '../TimelineStep';

function TetrapiInternshipTimelineStep() {
  const { t } = useTranslation();
  const { active, setActive } = useExperienceContext(tetrapiInternshipTimelineId);
  return (
    <TimelineStep
      iconSrc={TetrapiIcon}
      period={t($ => $.experience.tetrapiInternship.timeline.period)}
      title={t($ => $.experience.tetrapiInternship.timeline.title)}
      subtitle={t($ => $.experience.tetrapiInternship.timeline.subtitle)}
      active={active}
      onClick={setActive}
    />
  );
}
export default TetrapiInternshipTimelineStep;
