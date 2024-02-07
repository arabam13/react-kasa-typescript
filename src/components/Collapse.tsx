import { PropertyType } from '@/utils/types.ts';
import { useState } from 'react';
import chevronDown from '/images/ChevronDown.png';
import chevronUp from '/images/ChevronUp.png';

type CollapseType = {
  title: PropertyType['title'];
  content: PropertyType['description'] | JSX.Element[];
};

export default function Collapse({ title, content }: CollapseType) {
  const [showContent, setShowContent] = useState(false);

  const handleShowContent = () => {
    setShowContent(!showContent);
  };

  const collapseContent = showContent ? 'visible' : 'hidden';
  const collapseChevron = showContent ? chevronDown : chevronUp;

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={handleShowContent}>
        <span>{title}</span>
        <div className="chevronValue" data-testid="chevron">
          <img src={collapseChevron} alt={title} />
        </div>
      </div>

      <div className={collapseContent} data-testid="stateCollapse">
        <ul className="listContent">{content}</ul>
      </div>
    </div>
  );
}
