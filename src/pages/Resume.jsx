import './Resume.css';

const Resume = () => {
  return (
    <div>
      <h1 className="text-input">Resume</h1>
      <div className="resume-container">
      <p>Download my resume:</p>
      <a className="resume-link" href="https://docs.google.com/document/d/10fxrxWfdU8dz-q0JVNpKZzc8JM9Cnhvgn0k_RpwO2Fw/edit" download>Download Resume</a>
      
      <h2>Frontend Proficiencies:</h2>
      <ul className="resume-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>JQuery</li>
        <li>Responsive Design</li>
        <li>Bootstrap</li>
      </ul>
      
      <h2>Backend Proficiencies:</h2>
      <ul className="resume-list">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>API's</li>
        <li>MongoDB, Mongoose</li>
        <li>MySQL, Sequelize</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
      </div>
    </div>
  );
};

export default Resume;