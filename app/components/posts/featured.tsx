import { faAward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import remarkGfm from 'remark-gfm';
import Markdown from 'react-markdown';
import Tooltip from '../tooltip';

interface FeaturedProps {
  title?: string;
  contentClass: string;
  features: string[];
}

export default function Featured({ contentClass, features, title = 'Featured' }: FeaturedProps) {
  let featuresText;
  if (features.length === 1) featuresText = `${features[0]}.`;
  else if (features.length === 2) featuresText = `${features.join(' and ')}.`;
  else featuresText = `the following places:\n\n- ${features.join('\n- ')}`;
  const message = `This ${contentClass.toLowerCase()} was featured in ${featuresText}`;

  const details = (
    <div className="py-1 px-2">
      <h1 className="text-lg text-blue-400 text-center">
        <FontAwesomeIcon icon={faAward} fixedWidth /> {title} {contentClass}
      </h1>
      <Markdown className="text-slate-500" remarkPlugins={[remarkGfm]}>
        {message}
      </Markdown>
    </div>
  );
  return (
    <Tooltip
      message={details}
      backgroundClassName="bg-white"
      borderClassName="border-blue-100"
      tooltipArrowClassName="bg-blue-100"
    >
      <div className="text-blue-400 cursor-default">
        <FontAwesomeIcon icon={faAward} fixedWidth /> {title}
      </div>
    </Tooltip>
  );
}
