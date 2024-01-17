import { useState } from 'react';
import chevronUp from '/images/ChevronUp.png';
import chevronDown from '/images/ChevronDown.png';
import PropTypes from 'prop-types';

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

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default Collapse;
