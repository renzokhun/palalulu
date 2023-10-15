import about_image from '../images/shinobu.png';

function About() {

    return (
      <div className='about-page'>
        <div className='about-wrapper'>
          <div className='about'>
            <div className='title'><span>Who I am</span></div><br />

            Hi everyone! My name is <span>Ralvinc</span>, a newbie to the world of coding. I create small projects that align with my personal interests. This approach allows me to not only apply what I've learned, but also use the projects I create and enjoy the learning process.<br /><br />

            Besides coding, a few other activities I love to do!<br /><br />

            <li>Watching <span>anime</span></li> 
            <li>Reading <span>manga/light novel</span></li> 
            <li><span>Video games</span> (League of Legends, Genshin Impact) - <span>feel free to add me</span>!</li><br />

            I am also a co-founder of <a href="https://www.facebook.com/GetGoodTS" target="_blank"><b><i>GetGood Tutorial Services (GGTS)</i></b></a>, a small online tutoring service commited to helping students excel academically. Feel free to check it out if you, or someone you know, needs help to get good <span>&#128526;</span>.
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