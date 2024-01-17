import { useState } from 'react';
import ChevronLeft from '/images/ChevronLeft.png';
import ChevronRight from '/images/ChevronRight.png';
import PropTypes from 'prop-types';

function Carousel({ pictures }) {
  const [index, setIndex] = useState(0);
  const totalPictures = pictures.length - 1;

  if (index < 0) setIndex(totalPictures);
  if (index > totalPictures) setIndex(0);

  return (
    <section className="carousel">
      {/* displaying first picture */}
      <img
        src={pictures[index]}
        className="classImage"
        key={'car-' + index}
        alt={'photo ' + index}
      />

      {/* if more than one picture */}
      {totalPictures > 0 && (
        <>
          <div className="index-counter" onClick={() => setIndex(index - 1)}>
            <img
              src={ChevronLeft}
              className="classChevronLeft"
              alt={'Left arrow to change picture ' + index}
            />
          </div>
          <div className="index-counter" onClick={() => setIndex(index + 1)}>
            <img
              src={ChevronRight}
              className="classChevronRight"
              alt={'Right arrow to change picture ' + index}
            />
          </div>
        </>
      )}
      {totalPictures > 0 && (
        // displaying index of picture in the middle of the carousel
        <div className="div-counter">
          {index + 1}/{totalPictures + 1}
        </div>
      )}
    </section>
  );
}

Carousel.propTypes = {
  pictures: PropTypes.array.isRequired,
};

export default Carousel;
