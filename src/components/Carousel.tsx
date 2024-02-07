// import PropTypes from 'prop-types';
import { PropertyType } from '@/utils/types.ts';
import { useState } from 'react';
import ChevronLeft from '/images/ChevronLeft.png';
import ChevronRight from '/images/ChevronRight.png';

type CarouselProps = {
  pictures: PropertyType['pictures'];
};
// export default function Carousel({ pictures }: CarouselProps) {
export const Carousel = ({ pictures }: CarouselProps) => {
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
          <button className="index-counter" data-testid='chevronLeft' onClick={() => setIndex(index - 1)}>
            <img
              src={ChevronLeft}
              className="classChevronLeft"
              alt={'Left arrow to change picture ' + index}
            />
          </button>
          <button className="index-counter" data-testid='chevronRight' onClick={() => setIndex(index + 1)}>
            <img
              src={ChevronRight}
              className="classChevronRight"
              alt={'Right arrow to change picture ' + index}
            />
          </button>
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
