import myPhoto from '../assets/ME.jpg';

const AboutMe = () => {
  return (
    <div className='aboutMeContainer'>
      <div className='aboutMeInfo'>
        <h1>About Me</h1>
            <div>
              <img src={myPhoto} alt="A photo of me" className="mePhoto" />
            </div>
          <div className='aboutMeDescription'>
            Hello, my name is Jacob Kueck.  I am a 25 year old male; born and raised in Kansas City, Missouri.  I am currently attending Kansas University for web development through their coding bootcamp.  In the meantime, I work for Mission Foods, where my main focus is distributing product throughout my territory.  To do so, I work with managers within each store, prepare order sheets, conduct inventory counts, as well as, stock, drive and deliver the product to each location.<br/>
            I spend most of my days with my family.  We recently welcomed our first son, Luca John Kueck.  Our days are filled with learning to navigate our new roles while perfecting the balance between work, school and our family.<br/>
            In my personal free time my biggest hobby is gaming.  A few years ago I began researching components to build my own personalized PC.  Over the years I've upgraded many parts including my RAM, GPU, and my power unit.  Other interests I have are playing and watching sports.  I love to golf and play basketball, as well as watch my favorite teams play such as Mizzou, the Royals, and the Chiefs<br/>
            I look forward to finishing school and starting my new venture within the coding world.  I hope to continue to learn more and be able to develop into a more experienced coder.
          </div>
      </div>
    </div>
  );
};

export default AboutMe;