import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import { DFFooter, ImageSlides, ListText, ParaText, Title, YouTubeEmbed } from '../components';

const carouselData = [
  `images/bending1.jpg`,
  `images/bending2.jpg`,
  `images/bending3.jpg`,
  `images/bending4.jpg`,
  `images/bending5.jpg`,
];

const notableFeatures = [
  `Four selectable elements (Earth, Air, Fire, Water), each with five abilities & alternates (40 abilities in total)`,
  `Six playable maps themed from various locations from Avatar: The Last Airbender`,
  `Cosmetics menu with unlockable banners`,
  `Public & Private invite matchmaking systems`,
  `In-depth spectating features and dynamic menus`,
];

const rolesAndAchievements = [
  `Developed the idea for the game, its mechanics, arena specifications,
  and coded most abilities & matchmaking functionality`,
  `Led a small team with varying degrees of contribution to either the code or the buildings/assets`,
  `Worked with the community to balance the game in order to create a fair and
   enjoyable fight regardless of the class & abilities picked`,
  `During February 2021, Bending Arena became the 3rd most popular minigame on the server by player vote`,
];

const BendingArena = () =>
  <>
    <div className="background">
      <Container className="d-grid gap-4 pt-3">
        <Title
          image="images/bending1.jpg"
          title="Bending Arena"
          subtitle="1v1 FPS Fighting Game (Diamondfire, 2021)"
        />
        <ParaText
          title="Overview"
          content="
            Bending arena is a fast paced 1v1 FPS fighting game built within minecraft.
            It takes the popular show Avatar: The Last Airbender and lets players fight it
            out with Earth, Air, Fire, and Water abilities. Matches are fast, and amazing
            to watch with the available spectating features. Banners are also available
            to be displayed behind players during a fight to showcase their achievements
            "
        />
        <YouTubeEmbed videoId="zi2G8dxSkik" videoDesc="Gameplay demo featuring all four elements and gameplay flow" />
        <ListText title="Notable Features" entries={notableFeatures} />
        <ListText title="Roles & Achievements" entries={rolesAndAchievements} />
        <ImageSlides data={carouselData} />
        <DFFooter plotId="43122" />
      </Container>
    </div>
  </>;

export default BendingArena;
