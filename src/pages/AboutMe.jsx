import myPhoto from '../assets/ME.jpg';
import lucaPhoto from '../assets/LUCAJOHN.jpeg';

const AboutMe = () => {
  return (
    <div className='aboutMeContainer'>
      <div className='aboutMeInfo'>
        <h1>About Me</h1>
            <div>
              <img src={myPhoto} alt="A photo of me" className="mePhoto" />
              <img src={lucaPhoto} alt="A photo of Luca" className='lucaPhoto' />
            </div>
          <div className='aboutMeDescription'>
          Hello! My name is Jacob Kueck, a proud resident of Kansas City, Missouri. I am a web design enthusiast with a passion for both front end and back end development. I live with my girlfriend and son, who motivate me to continually improve and expand my skill set in the world of web development.

          I am a proud supporter of the Chiefs, Mizzou, and Royals, as sports have always been a big part of my life. In my spare time, you can find me on the golf course, coding new projects, or immersed in the latest video games.

          I recently completed a Full Stack Web Development certificate program at the University of Kansas, solidifying my expertise in all things web development. Although my main source of income is through my role as a distributor for Mission Foods, I am constantly seeking new challenges and opportunities to further enhance my skills in the web development field.

          I am excited to showcase my portfolio and share my journey as a dedicated web developer. Thank you for stopping by!
            {/* Hello, my name is Jacob Kueck.  I am a 25 year old male; born and raised in Kansas City, Missouri.  I am currently attending Kansas University for web development through their coding bootcamp.  In the meantime, I work for Mission Foods, where my main focus is distributing product throughout my territory.  To do so, I work with managers within each store, prepare order sheets, conduct inventory counts, as well as, stock, drive and deliver the product to each location.<br/>
            I spend most of my days with my family.  We recently welcomed our first son, Luca John Kueck.  Our days are filled with learning to navigate our new roles while perfecting the balance between work, school and our family.<br/>
            In my personal free time my biggest hobby is gaming.  A few years ago I began researching components to build my own personalized PC.  Over the years I've upgraded many parts including my RAM, GPU, and my power unit.  Other interests I have are playing and watching sports.  I love to golf and play basketball, as well as watch my favorite teams play such as Mizzou, the Royals, and the Chiefs<br/>
            I look forward to finishing school and starting my new venture within the coding world.  I hope to continue to learn more and be able to develop into a more experienced coder. */}
          </div>
      </div>
    </div>
  );
};

export default AboutMe;