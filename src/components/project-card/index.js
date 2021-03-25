import projectImage from '../../assets/project-images/example-image.PNG'
import './style.css'

function ProjectCard(props) {
  return (
        <div className= "project-card">
          <div className= "project-card-content">
            <div className= "project-image">
              <img src = {projectImage} alt="imageAlt"></img>
            </div>
            <div className="project-description-container">
              <h2>Meu título</h2>
              <div className="project-description">
                <span>Descrição</span>
                <p>Pnásod amsodma moamoa amsds asd oapdnpa asd  f ff asdfmoewewf.</p>
              </div>
              <p><span>Linguagens:</span> Javascript</p>
              <p><span>Tecnologias:</span> React</p>
            </div>
          </div>
        </div>
  );
}

export default ProjectCard;
