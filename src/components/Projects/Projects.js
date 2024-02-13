import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Preload from '../Pre'
import Particle from "../Particle";
import KC from "../../Assets/Projects/KC.png";
import KA from "../../Assets/Projects/KA.png";
import CH from "../../Assets/Projects/AC.png";
import Topme from "../../Assets/Projects/topmeImg.png";
import AFimart from "../../Assets/Projects/AF.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const [width, setWidth] = useState(1200);
  useEffect(() => {
    setWidth(window.innerWidth);

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    // Cleanup the timeout to prevent memory leaks
    return () => clearTimeout(loadingTimeout);
  }, []);

  const handleLoadSuccess = () => {
    console.log("PDF document loaded successfully");
    // Add any additional code you want to run after the PDF is loaded
  };
  return (
    <Container fluid className="project-section">
      <Particle />
      <Preload load={isLoading} />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Topme}
              isBlog={false}
              title="TopMe"
              description="A donation site empowering users to create posts for public causes. Built with React.js, SCSS, and JavaScript, incorporating React libraries like Material-UI for an intuitive and responsive user experience."
              ghLink="https://github.com/golddick/topme"
              demoLink="https://topme.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KC}
              isBlog={false}
              title="KONNET"
              description=" A dynamic social media platform enabling users to post, chat, apply for jobs, stream live videos, watch videos, read/download books. Features instant messaging with Socket.io integration for real-time communication."
              ghLink="https://github.com/golddick/g-chat"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KA}
              isBlog={false}
              title="KONNET Admin Dashboard"
              description="A React.js-based admin dashboard for Konnet, designed with CSS and JavaScript. The backend, powered by Node.js, seamlessly integrates with MongoDB, providing robust data management and an intuitive user interface."
              ghLink="https://github.com/golddick/admin-dashboard"
              demoLink="https://admin-seven-blush.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CH}
              isBlog={false}
              title="CYDEX"
              description="Cydex Logistics Limited, an online logistic service, redefines last-mile delivery. Our eco-friendly innovations transcend traditional boundaries, addressing inefficiencies in remote locations. Join us in pioneering sustainable global logistics."
              ghLink="https://github.com/golddick/Cdex"
              demoLink="https://cdex.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AFimart}
              isBlog={false}
              title="AFRIMART"
              description=" An online e-commerce platform specializing in African products and facilitating the export of African goods. Connecting global consumers with the rich diversity of African offerings, Afrimart promotes international trade and cultural exchange."
              ghLink="https://github.com/golddick/AfrimartCom"
              demoLink="https://afrimart-commerce.vercel.app/" 
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
