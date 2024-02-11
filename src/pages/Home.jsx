
import { Col, Container, Row } from 'react-bootstrap';
import { CardComponent, ParaText } from '../components';
import './App.css';

function Home() {

  return (
    <>
      <div className="background">
        <Container className="d-grid gap-4 pt-3">
          <Row className="pt-5 pb-1 justify-content-center">
            <Col className="text-center" md={9}>
              <h1 className="display-5 fw-bold">Colby Nolasco</h1>
              <p className="lead mb-4">
                Game Designer
              </p>
            </Col>
          </Row>
          <hr />
          <ParaText
            title="Welcome to my portfolio!"
            content="
            Game developer by hobby with 7 years of self taught game development experience, looking to gain
            professional experience in game development! On the multiplayer Minecraft server Diamondfire, I have
            successfully built several multiplayer focused minigames for a community of hundreds of players to enjoy.
            I currently have or are developing skills in Unity, Ableton Live, C#, and game design. Although I try
            to learn all aspects of game development, I am mainly focused on Game Design and Gameplay Mechanic
            aspects of development. Please feel free to take a look at a few of my projects that I
            have developed below!
            "
          />
          <hr />
          <Row className="justify-content-center">
            <Col md="6" xxl="4" align="center">
              <CardComponent
                imageUrl="images/bending1.jpg"
                link="/item1"
                title="Bending Arena"
                description="
                Bending arena is a fast paced 1v1 FPS fighting game built within minecraft.
            It takes the popular show Avatar: The Last Airbender and lets players fight it
            out with Earth, Air, Fire, and Water abilities. Matches are fast, and amazing
            to watch with the available spectating features. Banners are also available
            to be displayed behind players during a fight to showcase their achievements" />
            </Col>
            <Col md="6" xxl="4" align="center">
              <CardComponent
                imageUrl="images/laby5.jpg"
                link="/item1"
                title="Labyrinth 3"
                description="
            Labyrinth 3 is the third iteration of a First Person procedurally
            generated dungeon crawler.
            The game features a fully randomly generated maze complete with structures, and a large loot pool of items,
            weapons, armor, and magic. Monsters that spawn in the maze may have modified AI, allowing
            them to use abilities like lunging and using magic against the player." />
            </Col>
            <Col md="6" xxl="4" align="center">
              <CardComponent
                imageUrl="images/fates1.jpg"
                link="/item1"
                title="Fates: BR"
                description="
                Fates: BR is a FPS battle royale that utilizes Minecraft's Resource pack functionality to add additional
          items and sounds without modding the client directly. Fates features over 50 guns to choose from,
          each with their own custom animations for running, shooting, scoping, and reloading." />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
