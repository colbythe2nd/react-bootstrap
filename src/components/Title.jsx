import React from 'react';
import { Col, Row } from 'react-bootstrap';

function Title({ image, subtitle, title }) {
  return (
    <div className="header-image-row" style={{ backgroundImage: `url(${image})` }}>
      <Row className="pt-5 pb-4 justify-content-center">
        <Col className="text-center" md={9}>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </Col>
      </Row>
    </div>
  );
}

export default Title;
