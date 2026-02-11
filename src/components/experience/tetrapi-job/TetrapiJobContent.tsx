import { useTranslation } from 'react-i18next';
import { tetrapiJobTimelineId } from '.';
import ExperienceContent from '../ExperienceContent';
import { useExperienceContext } from '../ExperienceContext';

function TetrapiJobContent() {
  const { t } = useTranslation();
  const { prevActive } = useExperienceContext(tetrapiJobTimelineId);
  return (
    <ExperienceContent
      title={t($ => $.experience.tetrapiJob.content.title)}
      subtitle={t($ => $.experience.tetrapiJob.content.subtitle)}
      active={prevActive}
    >
      { t($ => $.experience.tetrapiJob.content.body) }
    </ExperienceContent>
  );
}

export default TetrapiJobContent;
