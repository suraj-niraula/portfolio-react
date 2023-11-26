import { motion } from "framer-motion";
import "./SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a className="icon" href="https://github.com/suraj-niraula">
        {/* GitHub Icon */}
        <motion.i
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
          className="bx bxl-github"
          aria-hidden="true"
          title="Suraj's Github Profile"
        ></motion.i>
      </a>
      <a className="icon" href={""}>
        {/* LinkedIn Icon */}
        <motion.i
          initial={{ y1: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.5, type: "spring" }}
          className="bx bxl-linkedin-square"
          aria-hidden="true"
          title="Suraj's LinkedIn Profile"
        ></motion.i>
      </a>
    </div>
  );
};

export default SocialIcons;
