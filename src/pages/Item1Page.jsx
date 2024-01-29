import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Item1Page = () =>
  <Container>
    <Row className="mt-4">
      <Col md={12}>
        <h2>Item 1 Page</h2>
        <p>This is a basic template for Item 1 page of the portfolio.</p>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <Card>
          <Card.Img variant="top" src="placeholder-image.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card>
          <Card.Img variant="top" src="placeholder-image.jpg" />
          <Card.Body>
            <Card.Title>Another Card Title</Card.Title>
            <Card.Text>
              Some more text to fill out this card with details about Item 1.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>;

export default Item1Page;
