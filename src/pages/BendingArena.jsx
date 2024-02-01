import React from 'react';
import { Col, Container, Ratio, Row } from 'react-bootstrap';
import ImageSlides from '../components/ImageSlides';
import './App.css'; // Make sure to import your CSS file

const carouselData = [
  {
    image: `images/bending1.png`,
  },
  {
    image: `images/bending2.png`,
  },
  {
    image: `images/bending3.png`,
  },
];

const BendingArena = () =>
  <>
    <div>
      <Row className="pt-5 pb-4 justify-content-center header-image-row">
        <Col className="text-center" md={9}>
          <h1>Bending Arena</h1>
          <p>1v1 FPS Fighting Game (Diamondfire, 2022)</p>
        </Col>
      </Row>
    </div>
    <Container className="d-grid gap-4 pt-3">
      <Row className="justify-content-center">
        <Col md={9}>
          <h4>Overview</h4>
          <p class="text-left">
            Bending arena is a fast paced 1v1 FPS fighting game built within minecraft.
            It takes the popular show Avatar: The Last Airbender and lets players fight it
            out with Earth, Air, Fire, and Water abilities. Matches are fast, and amazing
            to watch with the available spectating features. Banners are also available
            to be displayed behind players during a fight to showcase their achievements
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={7}>
          <Ratio aspectRatio={`16x9`}>
            <iframe
              src="https://www.youtube.com/embed/zi2G8dxSkik?si=4Ww_FaMiPfBlzs3R"
              title="YouTube video"
              allowfullscreen />
          </Ratio>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={9}>
          <h4>Notable Features</h4>
          <ul>
            <li>
              Four selectable elements (Earth, Air, Fire, Water),
              each with five abilities & alternates (40 abilities in total)
            </li>
            <li>
              Six playable maps themed from various locations from Avatar: The Last Airbender
            </li>
            <li>
              Cosmetics menu with unlockable banners
            </li>
            <li>
              Public & Private invite matchmaking systems
            </li>
            <li>
              In-depth spectating features and dynamic menus
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={9}>
          <h4>Roles & Achievements</h4>
          <ul>
            <li>
              Developed the idea for the game, its mechanics, arena specifications,
              and coded most abilties & matchmaking functionality
            </li>
            <li>
              Led a small team with varying degrees of contribution to either the code or the buildings/assets
            </li>
            <li>
              Worked with the community to balance the game in order to create a fair and enjoyable fight regardless
              of the class & abilities picked
            </li>
            <li>
              Garnered a decent following for the game, gaining a large amount of
              user support within a 2 week timeframe (300+ players "voting" for the plot)
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={7}>
          <Ratio aspectRatio={`16x9`}>
            <ImageSlides data={carouselData} />
          </Ratio>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={5} className="text-center">
          <p>
            Coded with visual programming on Diamondfire <br />
            Playable by joining <b>mcdiamondfire.com</b> and typing <b>/join 27500</b>
          </p>
        </Col>
      </Row>
    </Container>
  </>;

export default BendingArena;
