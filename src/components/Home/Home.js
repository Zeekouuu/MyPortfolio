import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Full.png";
import Home2 from "./Home2";


function Home() {
  return (
    <section>
      <Container style={{height: "680px"}} fluid className="home-section" id="home">
       
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi 
               
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ZAKARIA BOUARGA</strong>
              </h1>

              
            </Col>

            <Col md={5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <img
    src={homeLogo}
    alt="home pic"
    style={{ width: '300px', height: '300px' }}
  />
</Col>

          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
