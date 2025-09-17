// About.jsx
import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <motion.div
      className="about section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="heading">About Me</h2>
      <p className="subheading">
        I’m a <span className="highlight">Data Scientist</span> passionate about turning data into meaningful insights and intelligent applications.
      </p>

      <div className="card">
        <p>
          I hold a <span className="highlight">B.Tech in Artificial Intelligence</span> from SRM University, with hands-on experience in{" "}
          <span className="highlight">Python, SQL, Machine Learning, and Data Analytics</span>. 
          My academic and project work includes building <b>customer churn models</b>, 
          <b>disease diagnosis apps</b>, and <b>recommendation systems</b>.
        </p>
        <br />
        <p>
          I specialize in <span className="highlight">data cleaning</span>, <span className="highlight">EDA</span>, 
          <span className="highlight">predictive modeling</span>, and <span className="highlight">data visualization</span>. 
          I’m driven by solving real-world problems and developing systems that make data accessible and actionable.
        </p>
        <br />
        <p>
          My goal is to contribute as a <b>Data Scientist / ML Engineer</b> by building scalable AI solutions 
          that create a positive impact while continuously learning and pushing the boundaries of technology.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
