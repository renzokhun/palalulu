import about_image from '../images/shinobu.png';

function About() {

    return (
      <div className='about-page'>
        <div className='about-wrapper'>
          <div className='about'>
            <div className='title'><span>Who I am</span></div><br />

            Hi everyone! My name is <span>Ralvinc</span>. I enjoy creating small projects that are useful to me as a way to apply what I've learned and have fun in the learning process.<br /><br />

            Besides coding, a few other activities I love to do!<br /><br />

            <li>Watching anime</li> 
            <li>Reading manga/light novel</li> 
            <li>Video games (League of Legends, Genshin Impact, Pokemon)</li>
          </div>

          <img src={about_image} className='about-image' />
        </div>

        <div className='about-socials-wrapper'>
          <div className='title'><span>FIND ME ON</span></div>
          Don't hesitate to get in touch with me<br />

          <div className='about-socials'>
            <a href="https://github.com/ralvinc" target="_blank"><i class="fa-brands fa-github"></i></a> 
            <a href="https://www.youtube.com/@ralvinc" target="_blank"><i class="fa-brands fa-youtube"></i></a> 
          </div>
        </div>
      </div>
    )
  }
  
  export default About