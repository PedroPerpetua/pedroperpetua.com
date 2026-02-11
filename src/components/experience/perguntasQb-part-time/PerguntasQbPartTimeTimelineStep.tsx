import { useTranslation } from 'react-i18next';
import { useExperienceContext } from '../ExperienceContext';
import TimelineStep from '../TimelineStep';
import { perguntasQbPartTimeTimelineId } from '.';
import PerguntasQbIcon from '../../../assets/qb.png';

function PerguntasQbPartTimeTimelineStep() {
  const { t } = useTranslation();
  const { active, setActive } = useExperienceContext(perguntasQbPartTimeTimelineId);
  return (
    <TimelineStep
      iconSrc={PerguntasQbIcon}
      period={t($ => $.experience.perguntasQbPartTime.timeline.period)}
      title={t($ => $.experience.perguntasQbPartTime.timeline.title)}
      subtitle={t($ => $.experience.perguntasQbPartTime.timeline.subtitle)}
      active={active}
      onClick={setActive}
    />
  );
}

export default PerguntasQbPartTimeTimelineStep;
