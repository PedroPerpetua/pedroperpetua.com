import { useTranslation } from 'react-i18next';
import { perguntasQbPartTimeTimelineId } from '.';
import ExperienceContent from '../ExperienceContent';
import { useExperienceContext } from '../ExperienceContext';

function PerguntasQbPartTimeContent() {
  const { t } = useTranslation();
  const { prevActive } = useExperienceContext(perguntasQbPartTimeTimelineId);
  return (
    <ExperienceContent
      title={t($ => $.experience.perguntasQbPartTime.content.title)}
      subtitle={t($ => $.experience.perguntasQbPartTime.content.subtitle)}
      active={prevActive}
    >
      { t($ => $.experience.perguntasQbPartTime.content.body) }
    </ExperienceContent>
  );
}

export default PerguntasQbPartTimeContent;
