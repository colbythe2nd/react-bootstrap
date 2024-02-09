import React from 'react';
import { Col, Row } from 'react-bootstrap';

function ParaText({ content, title }) {
  return (
    <Row className="justify-content-center">
      <Col md={9}>
        <h4>{title}</h4>
        <p className="text-left">{content}</p>
      </Col>
    </Row>
  );
}

export default ParaText;
