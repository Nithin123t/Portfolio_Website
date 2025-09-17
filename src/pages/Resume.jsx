import React from 'react';
import './Section.css';

const Resume = () => {
  return (
    <div className="section">
      <div className="section-content animate-fade">
        <h1>📄 My Resume</h1>
        <p className="resume-subtext">
          You can view or download my resume below.
        </p>

        <div className="resume-buttons">
          <a
            href="/Nithin_Reddy_DataScientist_Resume.pdf"
            download
            className="resume-btn primary"
          >
            ⬇️ Download Resume
          </a>
          <a
            href="/Nithin_Reddy_DataScientist_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn outline"
          >
            👁️ View Online
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
