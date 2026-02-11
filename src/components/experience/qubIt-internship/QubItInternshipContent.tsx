import { useTranslation } from 'react-i18next';
import { qubItInternshipTimelineId } from '.';
import ExperienceContent from '../ExperienceContent';
import { useExperienceContext } from '../ExperienceContext';

function QubItInternshipContent() {
  const { t } = useTranslation();
  const { prevActive } = useExperienceContext(qubItInternshipTimelineId);
  return (
    <ExperienceContent
      title={t($ => $.experience.qubItInternship.content.title)}
      subtitle={t($ => $.experience.qubItInternship.content.subtitle)}
      active={prevActive}
    >
      { t($ => $.experience.qubItInternship.content.body) }
    </ExperienceContent>
  );
}

export default QubItInternshipContent;
