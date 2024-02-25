
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';
import { useEffect } from 'react';

import './App.css';

function AboutMe() {

  useEffect(() => { pdfjs.GlobalWorkerOptions.workerSrc =
    `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  });
  return (
    <>
      <div className="background">
        <Container className="d-grid gap-4 pt-3">
          <br />
          <Row className="justify-content-center">
            <Col className="pb-3" md={3}>
              <Image
                fluid
                className="thumbnail img-responsive"
                src={`images/mepersonally.jpg`}
              />
            </Col>
            <Col md={6}>
              <h4>About Me</h4>
              <p className="text-left">
                My name is Colby Nolasco, and I currently live in Cincinnati, OH attending
                the University of Cincinnati, expecting to graduate in Spring of 2024 with my Bachelors
                in Information technology (Tracking in Software Development and Game & Simulation).
                Alongside that, I am also expected to graduate with my Masters in IT as well in 2024.
                I like to spend my freetime either playing games with my friends, or attempting to
                make some of my own on my freetime. Currently I am busy trying to learn Unity and
                exploring other options for creating games outside of Minecraft.
                In the past year I have been finding myself trying to travel as much as possible,
                along with trying out new foods and experiences!
              </p>
            </Col>
          </Row>
          <br />
          <Row className="justify-content-center">
            <Col md={9}>
              <h4>Resume</h4>
              <Document
                file={`ColbyNolasco_Resume2024.pdf`}
              >
                <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} scale={1.5}
                  height={document.getElementsByClassName(`PdfDiv`)[0]?.clientHeight * 0.8 ?? 150} />
              </Document>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default AboutMe;
