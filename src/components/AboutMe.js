import { Link } from "react-router-dom";
import Button from "./Button";
import "./AboutMe.css";
import userImage from "../images/landing-img.jpeg";



const AboutMe = () => {
  return (
    <> 
    <section id="about-section" className="about">
      <div className="about-container">
        <div className="row">
          <div className="user-image">
            <img src={userImage} alt={""} />
          </div>
          <div className="user-info">
            <div className="content-container">
              <h4>Greetings! 👋</h4>
              <h5>I'm a Web Developer.</h5>
              <div className="content-description">
                <p>
                  I'm a passionate Full-Stack Developer, deeply engrossed in my
                  journey of technology and innovation.
                </p>
                <br />
                <p>
                  Every day, I relish the opportunity to solve problems, craft
                  innovative web projects, and stay on the cutting edge of web
                  technologies. My journey as a Full-Stack Developer is an
                  ever-evolving adventure, and I draw inspiration from the
                  diverse experiences that life has to offer.
                </p>
                <br />
                <p>
                  Life for me is a vibrant canvas of experiences that go beyond
                  the realms of code. When I'm not immersed in the web
                  development universe, you'll find me exploring cycling routes,
                  embracing the wind during spirited runs, and indulging in my
                  fascination for Formula One.
                </p>
              </div>

              {/* Button to view the portfolio */}
              <Link to="/portfolio">
                <Button name="View Portfolio" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section></>
   
  );
};

export default AboutMe;
