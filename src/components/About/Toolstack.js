import React, {useState}from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiJirasoftware,
  SiZoho,
} from "react-icons/si";

function Toolstack() {

  const ToolStack = [
    {id:1,
    icon:<SiVisualstudiocode/> ,
    name:"VS Code"
    },
    {id:2,
    icon:<SiPostman/> ,
    name:"Post Man"
    },
    {id:3,
    icon:<SiSlack/> ,
    name:"Slack"
    },
    {id:4,
    icon:<SiVercel/> ,
    name:"Vercel"
    },
    {id:5,
    icon:<SiJirasoftware/> ,
    name:"Jira"
    },
    {id:6,
    icon:<SiZoho/> ,
    name:"Zoho"
    },
  ]

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (id) => {
    setIsHovered((prevHoveredItems) => ({
      ...prevHoveredItems,
      [id]: true,
    }));
  };

  const handleMouseLeave = (id) => {
    setIsHovered((prevHoveredItems) => ({
      ...prevHoveredItems,
      [id]: false,
    }));
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col> */}

{
  ToolStack.map((stack)=>(
    <Col xs={4} md={2}
        className="tech-icons"   
        onMouseEnter={()=> handleMouseEnter(stack.id)} 
        onMouseLeave={() => handleMouseLeave(stack.id)}
        key={stack.id}
        >
         <div className="boxContent">
         <div  className="BoxIcon">{stack.icon} </div>
          {isHovered[stack.id] && <span className="TechName">{stack.name}</span>}
         </div>
        </Col>
  ))
}

    </Row>
  );
}

export default Toolstack;
