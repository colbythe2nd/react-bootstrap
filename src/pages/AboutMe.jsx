
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Document, Page, pdfjs } from 'react-pdf';
import { useEffect } from 'react';
import PDF from '../utils/ColbyNolasco_Resume2024.pdf';

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
                Hello! My name is Colby Nolasco, and I currently live in Cincinnati, OH and have just
                recently graduated the University of Cincinnati in Spring 2024. Ive now got a Bachelors
                in Information technology (Tracking in Software Development and Game & Simulation),
                along with a Masters in IT.
                I like to spend my freetime either playing games with my friends, or attempting to
                make some of my own on my freetime. Currently I am busy trying to learn Unity and
                exploring other options for creating games outside of Minecraft.
                In the past year I have been finding myself trying to travel as much as possible,
                along with trying out new foods and experiences! At the moment, I am currently seeking
                a new job now that I am basically done with my current student worker position, and I am
                open to anything exciting! In the meantime between jobs, I hope to learn a bit more about
                game development and practice some of my website skills along the way!
              </p>
            </Col>
          </Row>
          <br />
          <Row className="justify-content-center">
            <Col md={9}>
              <h4>Resume</h4>
              <Document
                file={PDF}
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
