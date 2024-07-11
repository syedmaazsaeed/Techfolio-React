import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/project5.png";
import EcommerceShopifyStore from "../../Assets/Projects/project6.jpg";
import movieshub from "../../Assets/Projects/project4.png";
import textify from "../../Assets/Projects/project3.png";
import Newspulse from "../../Assets/Projects/project1.png";
import inotebook from "../../Assets/Projects/project2.png";
import Github from "../../Assets/Projects/Github.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Github}
              isBlog={false}
              title="Github-CodeSource-MernApp"
              description="Github-CodeSource App is a full-stack MERN application with user authentication and profile management. It uses MongoDB Atlas for data storage and integrates GitHub authentication through Passport.js. The server is configured with Express and Node.js, using express-session for session management and Helmet.js for security. The frontend, built with React, provides a responsive interface with routes for user and explore functionalities."
              ghLink="https://github.com/syedmaazsaeed/Github-CodeSource-FullStack-App"
              demoLink="https://github.com/syedmaazsaeed/Github-CodeSource-FullStack-App"
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textify}
              isBlog={false}
              title="TextWizards"
              description="TextMastery allows users to perform the following text transformations: convert text to uppercase, convert text to lowercase, generate speech for the text, resume speech from where it was paused, pause the ongoing speech, clear the text input, copy the text, convert text to sentence case, and remove extra spaces."
              ghLink="https://github.com/syedmaazsaeed/ReactJS-WordCounter"
              demoLink="https://mytextwizard.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inotebook}
              isBlog={false}
              title="iNotebook"
              description="A secure MERN stack app for cloud note storage is called NoteVault. It prioritises user privacy with cutting-edge encryption and provides easy note writing, editing, and organisation. NoteVault offers a scalable architecture and user-friendly interface for centralised and accessible note-taking, catering to both professionals and students."
              ghLink="https://github.com/syedmaazsaeed/NoteVaultPro-MernApp"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieshub}
              isBlog={false}
              title="MoviesHub"
              description="The React-built Movies search application.By clicking on each movie's card, viewers may examine extensive information about the film, including its year, poster, and genre.Javascript provides an easy-to-use interface for movie discovery."
              ghLink="https://github.com/syedmaazsaeed/React-Movie-Search"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Tech Portfolio"
              description="This is my Tech Portfolio site! This repository contains the source code and assets for my portfolio. As a passionate front-end developer and software engineering student, I've created this website to showcase my skills, experience, and the projects I've worked on. Whether you're a potential client, employer, or fellow developer, I invite you to explore my portfolio to learn more about my work and capabilities."
              ghLink="https://github.com/syedmaazsaeed/Developer-Portfolio"
              demoLink="http://syedmaaz-portfolio.atwebpages.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Newspulse}
              isBlog={false}
              title="NewsPulse"
              description="NewsPulse is a React-based web application that fetches and displays the latest news articles from various categories using the NewsAPI. Using the NewsAPI, the web application NewsPulse retrieves and presents the most recent news items from a variety of categories. Users can browse news stories in a variety of categories, including technology, business, entertainment, general, health, and sports."
              ghLink="https://github.com/syedmaazsaeed/React-NewsPulse-App"
              // demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EcommerceShopifyStore}
              isBlog={false}
              title="EcommerceShopifyStore-reactApp (Firebase Authentication) "
              description="This is a React application that serves as the front end for a Shopify e-commerce store. It utilizes components to structure the user interface and interacts with the Shopify API (to be implemented) to retrieve and display product information, handle user actions like adding items to the cart, and potentially checkout flows."
              ghLink="https://github.com/syedmaazsaeed/EcommerceShopifyStore-reactAppn"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
