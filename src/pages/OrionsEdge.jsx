import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import { Col, Row } from 'react-bootstrap';
import { ImageSlides, ListText, ParaText, Title, YouTubeEmbed } from '../components';

const carouselData = [
  `images/orions1.jpg`,
  `images/orions2.jpg`,
  `images/orions3.jpg`,
  `images/orions4.jpg`,
  `images/orions5.jpg`,
];

const notableFeatures = [
  `Fully randomized level layouts on each playthrough`,
  `Top-Down movement system with dashing and shooting mechanics`,
  `AI System and Navmesh integration for all enemies within the level`,
  `Controller and Mouse & Keyboard support`,
  `High quality open-source sound effects and mixing`,
  `Custom original songs written for the game`,
];

const rolesAndAchievements = [
  `Pitched the initial idea of the game, and helped assist in making final design goals`,
  `Managed the Github repository and handled Merge & Pull requests`,
  `Worked on developing core features of the game such as movement, camera controls, weapon interactions,
  and enemy AI`,
  `Presented at IT Expo 2024 at the University of Cincinnati. Very well received among highschool guests,
  consistently held multiple people watching and playing our game for most of the expo`,
  `Awarded the Striving for Excellence award from faculty award ceremony, with $1000 cash prize`,
];

const OrionsEdge = () =>
  <>
    <div className="background">
      <Container className="d-grid gap-4 pt-3">
        <Title
          image="images/orions1.jpg"
          title="Orions Edge"
          subtitle="Top-down Roguelike (Unity, 2024)"
        />
        <ParaText
          title="Overview"
          content="
            Orions Edge is a roguelike top-down shooter set in a space station inspired by games
            like Enter the Gungeon and Furi. The player is able to explore a randomly generated space ship in
            search of the map room to be able to take back control of the ship from the robots
            running rampant throughout each room.

            Orions Edge was fully developed using the Unity Engine, and built for ITExpo 2024 at
            the University of Cincinnati.
            "
        />
        <YouTubeEmbed
          videoId="a1styOMxTg0"
          videoDesc="Gameplay demo featuring most major game mechanics and gameflow"
        />
        <ListText title="Notable Features" entries={notableFeatures} />
        <ListText title="Roles & Achievements" entries={rolesAndAchievements} />
        <ImageSlides data={carouselData} />
        <Row className="justify-content-center">
          <Col md={5} className="text-center">
            <p>
              Coded in Unity using C#.<br />
              Demo for game can be found <a
                href="https://drive.google.com/file/d/1rnPGin3CYpg2khB21_32hmwIUNm8JXlR/view?usp=sharing">
                Here
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  </>;

export default OrionsEdge;
