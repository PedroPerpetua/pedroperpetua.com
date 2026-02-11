import { useTranslation } from 'react-i18next';
import { tetrapiInternshipTimelineId } from '.';
import ExperienceContent from '../ExperienceContent';
import { useExperienceContext } from '../ExperienceContext';

function TetrapiInternshipContent() {
  const { t } = useTranslation();
  const { prevActive } = useExperienceContext(tetrapiInternshipTimelineId);
  return (
    <ExperienceContent
      title={t($ => $.experience.tetrapiInternship.content.title)}
      subtitle={t($ => $.experience.tetrapiInternship.content.subtitle)}
      active={prevActive}
    >
      { t($ => $.experience.tetrapiInternship.content.body) }
    </ExperienceContent>
  );
}

export default TetrapiInternshipContent;
