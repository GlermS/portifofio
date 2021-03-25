import './App.css';
import ProjectCard from './components/project-card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className = "page-title">Meu portifólio</h1>
      </header>
      <div className = 'App-body'>
        <ProjectCard />
      </div>
      <footer className = "App-footer">

      </footer>
    </div>
  );
}

export default App;
