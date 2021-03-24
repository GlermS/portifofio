import logo from './logo.svg';
import projectImage from './assets/project-images/example-image.PNG'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className = "page-title">Meu portifólio</h1>
      </header>
      <div className = 'App-body'>
        <div className= "project-card">
          <div className= "project-card-content">
            <div className= "project-image">
              <img src = {projectImage}></img>
            </div>
            <div className="project-description-container">
              <h2>Meu título</h2>
              <div className="project-description">
                <span>Descrição</span>
                <p>Pnásod amsodma moamoa amsds asd oapdnpa asd  f ff asdfmoewewf  </p>
              </div>
              <p><span>Linguagens:</span> Javascript</p>
              <p><span>Tecnologias:</span> React</p>
            </div>
          </div>
        </div>
      </div>
      <footer className = "App-footer">

      </footer>
    </div>
  );
}

export default App;
