import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import "./ProjectCard.css";


const ProjectCard = ({ title, color, image, github }) => {
  return (
    <a href={github}  target="_blank" rel="noreferrer" className="project-card" style={{ backgroundColor: color }} > 
      <div className="text-wrap">
        <h3 className="project-title">{title}</h3>
        <span className="view-work">
          View Work <FiArrowUpRight />
        </span>
      </div>
      <div className="image-container">
        <img src={image} alt="" />
      </div>
    </a>
    
  );
};

export default ProjectCard;
