import './Portfolio.css'
import superHero from '../assets/280869675-fd9e960d-55ac-4637-982e-6f41cf265321.png'
import passwordGen from '../assets/292333183-7b08e2b8-f7fd-43c4-a28f-e8893e5bc0e4.png'
import calender from '../assets/Desktop Screenshot 2024.02.24 - 00.41.21.41.png'
import foodie from '../assets/Foodie-forum-home.png'
import codeQuiz from '../assets/Desktop Screenshot 2024.02.24 - 00.52.18.96.png'
import weatherApp from '../assets/Desktop Screenshot 2023.10.30 - 22.08.55.14.png'
import SQL from '../assets/maxresdefault.jpg'
import CodeVerse from '../assets/Code-Verse.png'

const webApps = [
  {
    name: 'Super Hero Generator',
    screenshot: superHero,
    deployedLink: 'https://jakobytk.github.io/Superhero-Gen/',
    githubLink: 'https://github.com/Jakobytk/Superhero-Gen',
  },
  {
    name: 'Password Generator',
    screenshot: passwordGen,
    deployedLink: 'https://jakobytk.github.io/Password-Gen/',
    githubLink: 'https://github.com/Jakobytk/Password-Gen',
  },
  {
    name: 'Work Day Calender',
    screenshot: calender,
    deployedLink: 'https://jakobytk.github.io/Work-Day-Cal/',
    githubLink: 'https://github.com/Jakobytk/Work-Day-Cal',
  },
  {
    name: 'Foodie Form',
    screenshot: foodie,
    deployedLink: 'https://foodie-forum-8-9cb2bc2e8559.herokuapp.com/',
    githubLink: 'https://github.com/andria-goodwin/foodie-forum',
  },
  {
    name: 'Employee Tracker',
    screenshot: SQL,
    deployedLink: 'https://drive.google.com/file/d/1VI334eGsjTtvETqZpOIyu7kk1xlsikb5/view',
    githubLink: 'https://github.com/Jakobytk/Employee-Tracker',
  },
  {
    name: 'Code Verse',
    screenshot: CodeVerse,
    deployedLink: 'https://pure-basin-75600-0dbeacdae42e.herokuapp.com/',
    githubLink: 'https://github.com/Jakobytk/Code-Verse',
  },
];

const Portfolio = () => {
  return (
  <div>
    <h1 className="text-input">Portfolio</h1>
    <div className="portfolio-container">
      {webApps.map((app, index) => (
        <div className="web-app" key={index}>
          <img src={app.screenshot} alt={app.name} className="app-image" />
          <div className="links">
            <a href={app.deployedLink} target="_blank" rel="noreferrer" className="link">Deployed App</a>
            <a href={app.githubLink} target="_blank" rel="noreferrer" className="link">GitHub Repo</a>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Portfolio;