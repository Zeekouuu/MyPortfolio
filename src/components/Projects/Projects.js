import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Makla delivery"
              description="A mobile food delivery application
              developed with React Native on the client side and Spring
              Boot on the server side, integrating mapping features to
              enhance the user experience"
              ghLink="https://github.com/Zeekouuu/Makla_Portfolio"

             // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="DBSCAN"
              description="DBSCAN Clustering Algorithm implemented in Java for clustering string data based on similarity"
              ghLink="https://github.com/Zeekouuu/DbScan"
            //  demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ASSURANCE"
              description="This platform utilizes React and Spring Boot technologies, aiming to manage the health status of patients in order to facilitate financial compensation processes"
              ghLink="https://github.com/Zeekouuu/Assurance"
             // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Alkhalil Morpho Sys"
              description="realization of a search engine with solr for interpretations of the Holy Quran using docker "
              ghLink="https://github.com/Zeekouuu/Alkhalil-Morpho-Sys"
             // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="user management"
              description="Developing a basic CRUD (Create, Read, Update, Delete) application using React and Spring Boot, incorporating token-based authentication"
              ghLink="https://github.com/Zeekouuu/token"
             // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
