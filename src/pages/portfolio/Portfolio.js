import React from "react";
import PageHeading from "../../components/PageHeading";
import "./Portfolio.css";
import ProjectList from "../../components/ProjectList";

const Portfolio = () => {
  return (
    <>
      {/* Main Portfolio Page */}
      <main className="portfolio-container">
        {/* Display the page header */}
        <PageHeading title="Portfolio" description="View my work" />
        <div className="projects">
          {/* Display the list of projects */}
          <div className="project-link">
            <ProjectList />
          </div>
        </div>
      </main>
    </>
  );
};

export default Portfolio;
