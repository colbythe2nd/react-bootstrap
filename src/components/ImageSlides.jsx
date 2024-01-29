
import React, { useState } from 'react';
import { Carousel, Image, Modal } from 'react-bootstrap';

function ImageSlides({ data }) {
  const [ index, setIndex ] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [ show, setShow ] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return <>
    <Modal size="lg" show={show} onHide={handleClose}>
      <Image src={data[index].image} />
    </Modal>
    <Carousel className={`w-100 d-block`} activeIndex={index} onSelect={handleSelect}>
      {data.map((slide, idx) =>
        <Carousel.Item key={idx}>
          <Image style={{ height: `50vh`, object_fit: `cover`, object_position: `center`, overflow: `hidden` }}
            onClick={handleShow}
            src={slide.image} />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>)}
    </Carousel>
  </>;
}

export default ImageSlides;
