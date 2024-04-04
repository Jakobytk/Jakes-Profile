import './Portfolio.css'
import superHero from '../assets/280869675-fd9e960d-55ac-4637-982e-6f41cf265321.png'
import passwordGen from '../assets/292333183-7b08e2b8-f7fd-43c4-a28f-e8893e5bc0e4.png'
import calender from '../assets/Desktop Screenshot 2024.02.24 - 00.41.21.41.png'
import foodie from '../assets/Foodie-forum-home.png'
// import codeQuiz from '../assets/Desktop Screenshot 2024.02.24 - 00.52.18.96.png'
// import weatherApp from '../assets/Desktop Screenshot 2023.10.30 - 22.08.55.14.png'
import SQL from '../assets/maxresdefault.jpg'
import CodeVerse from '../assets/Code-Verse.png'

const webApps = [
  {
    name: 'Super Hero Search',
    screenshot: superHero,
    deployedLink: 'https://jakobytk.github.io/Superhero-Gen/',
    githubLink: 'https://github.com/Jakobytk/Superhero-Gen',
    description: "Introducing SuperSearch, the ultimate superhero search engine powered by the Wikipedia API and GIF API. With SuperSearch, you can easily discover everything about your favorite superheroes in one place. Simply enter the hero's name, and SuperSearch will fetch comprehensive information from Wikipedia, including movie details, character backgrounds, and more. Not only that, but SuperSearch also brings your favorite heroes to life with a collection of dynamic GIFs and captivating images sourced from the web. Built using JavaScript, HTML, and CSS, SuperSearch offers a seamless and visually stunning experience for all superhero enthusiasts. Unleash the power of knowledge and entertainment with SuperSearch today!",
  },
  {
    name: 'Password Generator',
    screenshot: passwordGen,
    deployedLink: 'https://jakobytk.github.io/Password-Gen/',
    githubLink: 'https://github.com/Jakobytk/Password-Gen',
    description: "Introducing PassGen Plus: your ultimate password generator solution! Crafted with Java, HTML, and CSS, PassGen Plus ensures robust security by generating passwords with a combination of upper and lower case letters, symbols, and numbers. Each password is at least 8 characters long, offering maximum protection for your accounts. With PassGen Plus, you can create strong and unique passwords effortlessly, keeping your online accounts safe from unauthorized access.",
  },
  {
    name: 'Work Day Calender',
    screenshot: calender,
    deployedLink: 'https://jakobytk.github.io/Work-Day-Cal/',
    githubLink: 'https://github.com/Jakobytk/Work-Day-Cal',
    description: "Introducing WorkDay Planner: your go-to tool for efficient scheduling! Crafted with Java, CSS, and HTML, this intuitive calendar keeps you organized from 9 to 5. With built-in storage functionality, your important appointments and tasks stay securely on-site, ensuring you never miss a beat. Whether it's meetings, deadlines, or reminders, WorkDay Planner is your reliable companion for a productive day.",
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
    <h1 className="Port-h1">Portfolio</h1>
    <div className="portfolio-container">
      {webApps.map((app, index) => (
        <div className="web-app" key={index}>
          <p className='description'>{app.description}</p>
          <img src={app.screenshot} alt={app.name} className="app-image" />
          <div className="links">
            <a href={app.deployedLink} target="_blank" rel="noreferrer" className="link">{app.name}</a>
            <a href={app.githubLink} target="_blank" rel="noreferrer" className="link">GitHub Repo</a>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Portfolio;