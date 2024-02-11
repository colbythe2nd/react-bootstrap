import React from 'react';
import { Card, Ratio } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CardComponent = ({ description, imageUrl, link, title }) => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(link);
  };

  return <div>
    <Card className="h-100" onClick={navigateTo} style={{ cursor: `pointer` }}>
      <Ratio aspectRatio={`16x9`}>
        <Card.Img variant="top" src={imageUrl} />
      </Ratio>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  </div>;
};
export default CardComponent;
