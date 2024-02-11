
import React, { useState } from 'react';
import { Carousel, Col, Image, Modal, Ratio, Row } from 'react-bootstrap';

function ImageSlides({ data }) {
  const [ index, setIndex ] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [ show, setShow ] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return <>
    <Modal size="xl" show={show} onHide={handleClose}>
      <Image src={data[index]} />
    </Modal>
    <Row className="justify-content-center">
      <Col md={7}>
        <Ratio aspectRatio={`16x9`}>
          <Carousel className={`w-100 d-block`} activeIndex={index} onSelect={handleSelect} slide={!show}>
            {data.map((imageUrl, idx) =>
              <Carousel.Item key={idx}>
                <Ratio aspectRatio={`16x9`}>
                  <Image
                    src={imageUrl}
                    onClick={handleShow}
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
