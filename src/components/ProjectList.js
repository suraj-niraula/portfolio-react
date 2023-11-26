import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../_data/projects.json";

const ProjectList = () => {
  return (
    <div className="card-container">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          color={project.bgcolor}
          image={project.image}
          github={project.github}
        />
      ))}
    </div>
  );
};

export default ProjectList;
