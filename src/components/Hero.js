import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import SocialIcons from "./SocialIcons";
import "./Hero.css";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";


const Hero = () => {
  const scrollToAbout = () => {
    scroll.scrollTo("about-section", {
      smooth: true,
      duration: 500,
    });
  };
  return (
    <>
      <div className="text-container">
        {/* Animated name */}
        <motion.h1
          className="name"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0, duration: 0.5, type: "spring" }}
        >
          Suraj Niraula
        </motion.h1>
        {/* Animated description */}
        <motion.div
          className="description"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, type: "spring" }}
        >
          {/* Typewriter effect for dynamic text animation without a cursor */}
          <Typewriter
            className="description"
            options={{
              cursor: "",
            }}
            onInit={(typewriter) => {
              typewriter.changeDelay(50).typeString("Web Developer").start();
            }}
          />
        </motion.div>
        {/* Add the "Download CV" button below the description */}
        <div className="center-align">
          <motion.a
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            href="/CV.docx" 
            download="CV.docx"
            className="download-cv-button"
          >
            <i class="bx bx-download"></i>Download CV
          </motion.a>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* Use ScrollLink for smooth scrolling within the same page */}
        <ScrollLink
          to="about-section"
          spy={true}
          smooth={true}
          duration={500}
          className="down-arrow-button"
          onClick={scrollToAbout}
        >
          <div className="scroll-view"><i className="bx bx-down-arrow-alt"></i></div>
        </ScrollLink>

      </motion.div>

      {/* Displaying social icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <SocialIcons />
      </motion.div>
    </>
  );
};

export default Hero;
