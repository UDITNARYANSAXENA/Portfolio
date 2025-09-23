import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Udit Narayan Saxena </span>
            from <span className="purple"> Noida, Uttar Pradesh , India.</span>
            <br />
            I am currently working as Web Developer at Easrise Legalpaper
            Management (OPC) Pvt. Ltd. From September 2025 , I completed my
            B.Tech from Dr. A.P.J. Abdul Kalam Technical University , Lucknow.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning about Tech and Science
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning about History and Geography
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Udit Narayan Saxena</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
