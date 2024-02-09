
import React, { useState } from 'react';
import { Carousel, Col, Image, Ratio, Row } from 'react-bootstrap';

function ImageSlides({ data }) {
  const [ index, setIndex ] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return <>
    <Row className="justify-content-center">
      <Col md={7}>
        <Ratio aspectRatio={`16x9`}>
          <Carousel className={`w-100 d-block`} activeIndex={index} onSelect={handleSelect}>
            {data.map((imageUrl, idx) =>
              <Carousel.Item key={idx}>
                <Ratio aspectRatio={`16x9`}>
                  <Image
                    src={imageUrl}
                  />
                </Ratio>
              </Carousel.Item>)}
          </Carousel>
        </Ratio>
      </Col>
    </Row>
  </>;
}

export default ImageSlides;
