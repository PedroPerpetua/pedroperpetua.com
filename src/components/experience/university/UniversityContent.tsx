import { useTranslation } from 'react-i18next';
import { universityTimelineId } from '.';
import ExperienceContent from '../ExperienceContent';
import { useExperienceContext } from '../ExperienceContext';

function UniversityContent() {
  const { t } = useTranslation();
  const { prevActive } = useExperienceContext(universityTimelineId);
  return (
    <ExperienceContent
      title={t($ => $.experience.university.content.title)}
      subtitle={t($ => $.experience.university.content.subtitle)}
      active={prevActive}
    >
      { t($ => $.experience.university.content.body) }
    </ExperienceContent>
  );
}

export default UniversityContent;
