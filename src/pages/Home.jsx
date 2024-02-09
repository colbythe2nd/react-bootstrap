
import { Col, Container, Row } from 'react-bootstrap';
import { ParaText, YouTubeEmbed } from '../components';

function Home() {
  return (
    <>
      <div className="background">
        <Container className="d-grid gap-4 pt-3">
          <div className="header-image-row" >
            <Row className="pt-5 pb-4 justify-content-center">
              <Col className="text-center" md={9}>
                <h1>aaa</h1>
                <p>Yes</p>
              </Col>
            </Row>
          </div>
          <ParaText
            title="Overview"
            content="
          Labyrinth 3 is the third iteration of a First Person procedurally generated dungeon crawler.
          The game features a fully randomly generated maze complete with structures, and a large loot pool of items,
          weapons, armor, and magic. Monsters that spawn in the maze may have modified AI, allowing
          them to use abilities like lunging and using magic against the player.
        "
          />
          <YouTubeEmbed videoId="zi2G8dxSkik" />
        </Container>
      </div>
    </>
  );
}

export default Home;
