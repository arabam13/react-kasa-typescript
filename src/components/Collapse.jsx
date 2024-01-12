import { useState } from 'react';
import chevronUp from '/images/ChevronUp.png';
import chevronDown from '/images/ChevronDown.png';
// import "../Styles/Collapse.css"

// eslint-disable-next-line react/prop-types
const Collapse = ({ title, content }) => {
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
        <div className="chevronValue">
          <img src={collapseChevron} alt={title} />
        </div>
      </div>

      <div className={collapseContent}>
        <ul>{content}</ul>
      </div>
    </div>
  );
};

export default Collapse;
