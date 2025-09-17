import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Cube from "../components/Cube";
import Typewriter from "typewriter-effect";
import profileImg from "../assets/passphoto-removebg-preview.png"; 
import "./Home.css";

const Home = () => {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
    >
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-title">
            👋 Hi, I'm <span className="highlight">Nithin Reddy</span>
          </h1>

          <h2 className="home-subtitle">
            <Typewriter
              options={{
                strings: [
                  "Data Scientist",
                  "Machine Learning Engineer",
                  "Python & SQL Developer",
                  "AI Enthusiast",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
                pauseFor: 1500,
              }}
            />
          </h2>

          <p className="home-description">
            I'm a <span>Data Scientist</span> with experience in{" "}
            <span>Machine Learning</span>, <span>AI</span>, and{" "}
            <span>Data Analytics</span>. I love building intelligent systems
            that transform raw data into meaningful insights.
          </p>

          <p className="home-description">
            Skilled in <span>Python</span>, <span>SQL</span>, and{" "}
            <span>ML frameworks</span>, I’ve worked on projects like{" "}
            <b>Churn Prediction</b>, <b>Disease Diagnosis</b>, and{" "}
            <b>Recommendation Systems</b>. Passionate about solving
            real-world problems with data.
          </p>

          <div className="home-buttons">
            <Link to="/projects" className="btn primary">
              View My Projects
            </Link>
            <Link to="/contact" className="btn secondary">
              Contact Me
            </Link>
          </div>

          <div className="home-image">
            <img
              src={profileImg}
              alt="Nithin Reddy"
              className="profile-img"
              loading="lazy"
            />
          </div>
        </div>

        <div className="home-cube">
          <Cube />
        </div>
      </div>

      <div className="scroll-down">
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        >
          ↓
        </motion.span>
      </div>
    </motion.div>
  );
};

export default Home;
