import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ListText = ({ entries, title }) =>
  <>
    <Row className="justify-content-center">
      <Col md={9}>
        <h4>{title}</h4>
        <ul>
          {entries.map((entry, index) =>
            <li key={index}>{entry}</li>)}
        </ul>
      </Col>
    </Row>
  </>;

export default ListText;
