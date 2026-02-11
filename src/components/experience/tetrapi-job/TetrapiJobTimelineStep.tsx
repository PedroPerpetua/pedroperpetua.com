import { useTranslation } from 'react-i18next';
import { useExperienceContext } from '../ExperienceContext';
import { tetrapiJobTimelineId } from '.';
import TetrapiIcon from '../../../assets/tetrapi-cs.png';
import TimelineStep from '../TimelineStep';

function TetrapiJobTimelineStep() {
  const { t } = useTranslation();
  const { active, setActive } = useExperienceContext(tetrapiJobTimelineId);
  return (
    <TimelineStep
      iconSrc={TetrapiIcon}
      period={t($ => $.experience.tetrapiJob.timeline.period)}
      title={t($ => $.experience.tetrapiJob.timeline.title)}
      subtitle={t($ => $.experience.tetrapiJob.timeline.subtitle)}
      active={active}
      onClick={setActive}
    />
  );
}
export default TetrapiJobTimelineStep;
