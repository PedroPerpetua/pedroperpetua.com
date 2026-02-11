import { useTranslation } from 'react-i18next';
import { qubItInternshipTimelineId } from '.';
import { useExperienceContext } from '../ExperienceContext';
import QubItIcon from '../../../assets/qubIt.png';
import TimelineStep from '../TimelineStep';

function QubItInternshipTimelineStep() {
  const { t } = useTranslation();
  const { active, setActive } = useExperienceContext(qubItInternshipTimelineId);
  return (
    <TimelineStep
      iconSrc={QubItIcon}
      period={t($ => $.experience.qubItInternship.timeline.period)}
      title={t($ => $.experience.qubItInternship.timeline.title)}
      subtitle={t($ => $.experience.qubItInternship.timeline.subTitle)}
      active={active}
      onClick={setActive}
    />
  );
}

export default QubItInternshipTimelineStep;
