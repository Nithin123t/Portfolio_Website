import React from 'react';
import './Section.css';

const projectList = [
  // Resume Projects (Data Science Focus)
  {
    title: 'Customer Churn Prediction',
    description:
      'Built ML models (Random Forest, XGBRF) achieving 87% accuracy for predicting customer churn. Improved recall rate by 15% through feature selection and tuning. Created churn analysis dashboards with heatmaps and feature importance visualization.',
    tech: 'Python, Scikit-learn, Pandas, Seaborn',
    link: 'https://github.com/Nithin123t/Customer-Churn-Prediction',
  },
  {
    title: 'Diabetes & Heart Disease Prediction App',
    description:
      'Developed a Streamlit web app integrating ML models for disease diagnosis. Achieved 82% accuracy with Logistic Regression and Random Forest. Designed a simple UI allowing non-technical users to test predictions.',
    tech: 'Python, Machine Learning, Streamlit',
    link: 'https://github.com/Nithin123t/Diabetes-Heart-Disease-Prediction-Web-App',
  },
  {
    title: 'Movie Recommendation System',
    description:
      'Built a content-based recommender using cosine similarity and NLP. Processed data from 5000+ movies and improved relevance scores by 20%, providing personalized recommendations.',
    tech: 'Python, NLP, Cosine Similarity',
    link: 'https://github.com/Nithin123t/Movie-Recommendation-System',
  },

  // Other Projects (Full-Stack + IoT + Web)
  {
    title: 'E-Commerce App',
    description:
      'A full-stack e-commerce platform showing mall stores, shops, games, and movie shows.',
    tech: 'React.js',
    link: 'https://virtual-mall-three.vercel.app/',
  },
  {
    title: 'Event Planner App',
    description:
      'Frontend-only React app with animated event pages, RSVP system, and Google Maps integration.',
    tech: 'React, CSS, React Router',
    link: '#',
  },
  {
    title: 'Live Code Execution Platform with Judge0 & MongoDB',
    description:
      'Enhanced a full-stack code editor using React.js, CodeMirror, and Node.js to support execution of JavaScript, Python, C++, and Java via Judge0 API. Improved execution reliability by 40% with async token-based polling.',
    tech: 'React.js, Node.js, MongoDB, Judge0 API, Postman',
    link: '#',
  },
  {
    title: 'Wrong Posture Detector',
    description:
      'Developed a muscle strain detection device using ultrasonic sensors and NodeMCU. Alerts users when poor posture is detected to prevent long-term back issues.',
    tech: 'NodeMCU, Buzzers, Ultrasonic Sensors, C++',
  },
  {
    title: 'Exports Management Website',
    description:
      'Responsive exports management platform for package requests and delivery coordination. Includes employee assignment and tracking system.',
    tech: 'HTML, CSS, JavaScript',
    link: 'https://nithin123t.github.io/Export-Package-project/',
  },
  {
    title: 'Mental-Health-Resource-Hub',
    description:
      'A website offering personalized health recommendations, articles, exercises, and customer support for mental wellness.',
    tech: 'React',
    link: 'https://mental-health-resource-hub-qnzl.vercel.app/',
  },
  {
    title: 'Online Food Delivery',
    description:
      'Developed an online food delivery site with menus, pricing, specials, and ordering functionality.',
    tech: 'HTML, CSS, JavaScript',
    link: 'https://nithin123t.github.io/Recipes/',
  },
];

const Projects = () => {
  return (
    <div className="section">
      <div className="section-content animate-fade">
        <h1>💼 Projects</h1>
        <div className="projects-container">
          {projectList.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Tech Stack:</strong> {project.tech}
              </p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  🔗 View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
