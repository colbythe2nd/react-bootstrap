
import React, { useState } from 'react';
import { Carousel, Image, Ratio } from 'react-bootstrap';

function ImageSlides({ data }) {
  const [ index, setIndex ] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return <>
    <Carousel className={`w-100 d-block`} activeIndex={index} onSelect={handleSelect}>
      {data.map((slide, idx) =>
        <Carousel.Item key={idx}>
          <Ratio aspectRatio={`16x9`}>
            <Image
              src={slide.image} />
          </Ratio>
        </Carousel.Item>)}
    </Carousel>
  </>;
}

export default ImageSlides;
