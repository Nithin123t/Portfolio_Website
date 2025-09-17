import React from 'react';
import './Section.css';

const skillsData = {
  'Programming & Languages': [
    'Python',
    'SQL',
    'JavaScript',
    'C++ (basic)',
  ],
  'Data Science & ML': [
    'NumPy',
    'Pandas',
    'Matplotlib',
    'Seaborn',
    'Scikit-learn',
    'Regression, Classification, Clustering',
    'Basic Deep Learning',
  ],
  'Frontend Development': [
    'React.js',
    'HTML5',
    'CSS3',
    'Responsive Design',
    'Vite',
  ],
  'Backend & Databases': [
    'Node.js',
    'Express.js',
    'MongoDB',
    'REST API Development',
    'JWT Authentication',
  ],
  'Tools & Platforms': [
    'Git & GitHub',
    'Jupyter Notebook',
    'VS Code',
    'Postman',
    'Nodemon',
    'npm/yarn',
    'Streamlit',
  ],
  'Soft Skills': [
    'Analytical Thinking',
    'Problem Solving',
    'Teamwork',
    'Communication',
    'Time Management',
  ],
};

const Skills = () => {
  return (
    <div className="section">
      <div className="section-content animate-fade">
        <h1>🧠 My Skills</h1>
        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills], idx) => (
            <div className="skill-card" key={idx}>
              <h3>{category}</h3>
              <ul>
                {skills.map((skill, i) => (
                  <li key={i}>✅ {skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
