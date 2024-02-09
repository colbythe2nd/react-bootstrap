import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import { DFFooter, ImageSlides, ListText, ParaText, Title, YouTubeEmbed } from '../components';

const carouselData = [
  `images/fates1.jpg`,
  `images/fates2.jpg`,
  `images/fates3.jpg`,
  `images/fates4.jpg`,
  `images/fates5.jpg`,
  `images/fates6.jpg`,
];

const notableFeatures = [
  ``,
  ``,
  ``,
  ``,
  ``,
];

const rolesAndAchievements = [
  ``,
  ``,
  ``,
  ``,
];

const FatesReloaded = () =>
  <>
    <div className="background">
      <Container className="d-grid gap-4 pt-3">
        <Title
          image="images/fates1.jpg"
          title="Fates: Battle Royale"
          subtitle="FPS Battle Royale (Diamondfire, 2024)"
        />
        <ParaText
          title="Overview"
          content="
          Fates: BR is a FPS battle royale that utilizes Minecraft's Resource pack functionality to add additional
          items and sounds without modding the client directly. Fates features over 50 guns to choose from,
          each with their own custom animations for running, shooting, scoping, and reloading.
          "
        />
        <YouTubeEmbed videoId="3x91AuUf7yo" />
        <ListText title="Notable Features" entries={notableFeatures} />
        <ListText title="Roles & Achievements" entries={rolesAndAchievements} />
        <ImageSlides data={carouselData} />
        <DFFooter plotId="42769" />
      </Container>
    </div>
  </>;

export default FatesReloaded;
