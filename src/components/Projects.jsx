import project1_image from '../images/anisongs.png';
import project2_image from '../images/mylist.png';
import project3_image from '../images/my-website.png';
import project4_image from '../images/anisongs-program.png';

function Projects() {

    return (
      <div className='projects'>
        <div className='projects-title'>My Recent Projects</div>

        <div className='projects-wrapper'>
          <div className="project">
            <img src={project4_image} />

            <div className='project-links'>
              <a href="https://github.com/ralvinc/anisongs-program" target="_blank">Code</a>
            </div>

            This program simplifies adding anime themes to a user's YouTube playlist compared to the previous AniSongs web application. Instead of redirecting to a YouTube page with search results, this program uses the <span>YouTube Data API</span> and <span>OAuth</span> to directly add the desired video to the user's playlist. It eliminates extra steps and enables immediate playlist management.<br /><br />

            Built with: <span>Python</span>
          </div> 

          <div className="project">
            <img src={project3_image} />

            <div className='project-links'>
              <a href="https://github.com/ralvinc/my-website" target="_blank">Code</a>
              <a href="https://my-website-ralvinc.vercel.app/" target="_blank">Demo</a>
            </div>

            This is a website where I give a brief introduction about myself along with a display of personal projects I worked on. Additionally, it serves as a platform to share my personal thoughts and experiences related to anime.<br /><br />

            Built with: <span>HTML</span> | <span>CSS</span> | <span>Javascript (React)</span>
          </div>

          <div className="project">
            <img src={project2_image} />

            <div className='project-links'>
              <a href="https://github.com/ralvinc/mylist" target="_blank">Code</a>
            </div>

            <b><span>MyList</span></b> is a user-friendly website that enables 
            users to manage their watch/readlist easily. Users can 
            conveniently create new list items, specifying a name, 
            note, action (watch, read, or both), and completion status
            for each entry. It also provides the functionality to 
            read, update, and delete items from the list. The website 
            also includes user authentication.<br /><br />

            Built with: <span>HTML</span> | <span>CSS</span> | <span>Javascript (React)</span>
          </div> 

          <div className="project">
            <img src={project1_image} />

            <div className='project-links'>
              <a href="https://github.com/ralvinc/anisongs" target="_blank">Code</a>
              <a href="https://ralvinc.github.io/anisongs/" target="_blank">Demo</a>
            </div>

            <b><span>Anisongs</span></b> is a user-friendly website that provides 
            an instant display of anime theme lists upon searching 
            for an anime. By clicking on a title, it automatically 
            redirects  to a Youtube page with search results for 
            that specific theme. From there, I can easily select 
            a video and add it to my playlist.<br /><br />

            Built with: <span>HTML</span> | <span>CSS</span> | <span>Python (Django)</span>
          </div>  
        </div>
      </div>
    )
  }
  
  export default Projects