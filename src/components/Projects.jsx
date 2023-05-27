import project1_image from '../images/anisongs.png';
import project2_image from '../images/mylist.png';

function Projects() {

    return (
      <div className='projects'>
        <div className='projects-title'>My Recent Projects</div>

        <div className='projects-wrapper'>
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
            a video and add it to my playlist.
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
            also includes user authentication.

          </div>   
        </div>
      </div>
    )
  }
  
  export default Projects