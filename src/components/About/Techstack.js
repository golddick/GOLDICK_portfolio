import React,{useState} from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {

const TeachStack = [
  {id:1,
  icon:<DiJavascript1/> ,
  name:"JavaScript"
  },
  {id:2,
  icon:<DiReact/> ,
  name:"React Js"
  },
  {id:3,
  icon:<DiNodejs/> ,
  name:"Node Js"
  },
  {id:4,
  icon:<DiMongodb/> ,
  name:"Mongo DB"
  },
  {id:5,
  icon:<DiGit/> ,
  name:"Git"
  },
  {id:6,
  icon:<SiFirebase/> ,
  name:"FireBase"
  },
  {id:7,
  icon:<SiNextdotjs/> ,
  name:"Next JS"
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
    {
      TeachStack.map ((stack)=>(
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

export default Techstack;
