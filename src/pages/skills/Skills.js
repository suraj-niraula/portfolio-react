import React from "react";
import PageHeading from "../../components/PageHeading";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      {/* Main Skills Page */}
      <main className="skills-container">
        {/* Display the page header */}
        <PageHeading title="Skills" description="Deep-dive into" />
        <div className="skills">
          {/* Display the list of skills */}
          <div className="frontend-skills-card">
            <p>Technical Skills</p>
            <div className="technical-skills">
              <div className="left-technical-skills">
                <button className="skills-button">HTML</button>
                <button className="skills-button">CSS</button>
                <button className="skills-button">JavaScript</button>
              </div>
              <div className="right-technical-skills">
                <button className="skills-button">React.JS</button>
                <button className="skills-button">PostgresSQL</button>
                <button className="skills-button">Git and Github</button>
              </div>
            </div> 
          </div>
          <div className="frontend-skills-card">
            <p>Soft Skills</p>
            <div className="soft-skills">
              <div className="left-soft-skills">
                <button className="skills-button">Communication Skills</button>
                <button className="skills-button">Problem-Solving</button>
                <button className="skills-button">Adaptability</button>
              </div>
              <div className="right-soft-skills">
                <button className="skills-button">Teamwork and Collaboration</button>
                <button className="skills-button">Time Management</button>
                <button className="skills-button">Attention to Detail</button>
              </div>
            </div> 
          </div>
        </div>
      </main>
    </>
  );
};

export default Skills;
