import React from 'react';
import { Col, Ratio, Row } from 'react-bootstrap';

const YouTubeEmbed = ({ videoDesc, videoId }) =>
  <Row className="justify-content-center">
    <Col md={7}>
      <Ratio aspectRatio="16x9">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title="YouTube video"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </Ratio>
      <br />
      <p className="text-center"><i>{ videoDesc }</i></p>
    </Col>
  </Row>;
export default YouTubeEmbed;
