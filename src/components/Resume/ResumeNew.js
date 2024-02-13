import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/GOLDICK.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import Preload from '../Pre'
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const scale = width > 786 ? width / 2 / 595 : 0.4;

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



  
  const nextPage = () => {
    if (currentPage < 2) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  



  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
        {
          isLoading ? (
            <Preload load={isLoading} />
          ) : (
            <Document file={pdf} className="d-flex justify-content-center" onLoadSuccess={handleLoadSuccess}>
            <div className="pdf-container">
           <Page pageNumber={currentPage} scale={scale} />
        </div>
            </Document>
          )
        }
      
        </Row>
   
        <Row style={{ justifyContent: "center", position: "relative" }}>
        {currentPage < 2 ? (
          <Button   variant="primary" onClick={() => nextPage()} style={{ maxWidth: "250px", marginTop: '10px', cursor: 'pointer' }}>
            Continue
          </Button>
        ) : (
          <Button   variant="primary" onClick={() => setCurrentPage((prevPage) => prevPage - 1)} style={{ maxWidth: "250px", marginTop: '10px', cursor: 'pointer' }}>
            Go Back
          </Button>
        )}
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
