import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profi3.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

function Home2() {
  return (
    <Container fluid className="home-about-section " id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">

              {/* My name is Zakaria Bouarga, and I am a Software Engineering  with a passion for full-stack development. I specialize in Vue.js, React, and Spring Boot, allowing me to work with both front-end and back-end technologies. Throughout my studies, I have honed my skills in building robust and user-friendly applications.
 */}
              My name is Zakaria Bouarga, and I am a Software Engineering  with a passion for full-stack development.I specialize in
              <i>
                <b className="purple">  React, Vue.js, Spring Boot  </b>
              </i>
              <br />
              <br />
              allowing me to work with both front-end and back-end technologies.
              <br />
              Throughout my studies, I have honed my skills in building <br/>robust and user-friendly applications.
               
             
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            
              <img src={myImg} className="img-fluid rounded-circle" alt="avatar" />
           
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Zeekouuu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/zeekouuu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <BsFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/zakaria-bouarga-70754824a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/zeekouu/?hl=fr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
