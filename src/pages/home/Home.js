import React from "react";
import Hero from "../../components/Hero";
import AboutMe from "../../components/AboutMe";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* Main Landing Page */}
      <main className="landing-container">
        {/* Display the hero component */}
        <Hero />
      </main>
      {/* Display the about section */}
      <AboutMe />
    </>
  );
};

export default Home;
