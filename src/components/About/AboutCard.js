import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Apart from working as a
            <span className="purple"> software engineer</span>
           , I engage in various other activities. 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> I participated as a player of the junior national Moroccan volleyball team.
            </li>
            <li className="about-activity">
              <ImPointRight /> I am skilled at playing the guitar.
            </li>
            <li className="about-activity">
              <ImPointRight /> I am a professional barber
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
