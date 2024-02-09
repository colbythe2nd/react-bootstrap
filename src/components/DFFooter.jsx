import React from 'react';
import { Col, Row } from 'react-bootstrap';

function DFFooter({ plotId }) {
  return <>
    <Row className="justify-content-center">
      <Col md={5} className="text-center">
        <p>
          Coded with visual programming in Minecraft<br />
          Playable by joining <b>mcdiamondfire.com</b> and typing <b>/join {plotId}</b>
        </p>
      </Col>
    </Row>
  </>;
}

export default DFFooter;
