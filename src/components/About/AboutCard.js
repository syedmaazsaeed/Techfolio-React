import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Syed Maaz Saeed </span>
            from <span className="purple"> Bahawalpur, Pakistan.</span>
            <br /> <br />
            I am currently Working as a MERN Stack Technology.As a self-taught Front-End Developer | React Developer I specialize in modern web
            technologies, including React Node Express JS and MongoDB.
            <br /> <br />
            I have completed (ICS) in Maths and Computer at Superior Group of
            College Bahawalpur.
            <br /> <br />
            I am currently delving deep into the field of software engineering
            at the Islamia University of Bahawalpur, where I am eager to explore
            the new technological era and stay consistently updated to remain at
            the forefront of innovation and development
            <br /> <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Complete Coding Challenges
            </li>
            <li className="about-activity">
              <ImPointRight /> Explore Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Thrive on new discoveries
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "From syntax errors to success stories. 📈💻!"{" "}
          </p>
          <footer className="blockquote-footer">Hacker</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
