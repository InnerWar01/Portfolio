import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Welcome from './welcome';
import ProjectDetails from './project-details';
import About from './about';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 id="name">Patricia Ciobanu </h1>
          <Route exact path="/Portfolio" component={Welcome}/>
          <Route path="/Portfolio/projects/:projectName" render={() => <ProjectDetails/>}/> 
          <Route path="/Portfolio/about" render={() => <About/>}/>
        </header>
        <footer>
          <p>Copyright &copy; Patricia Ciobanu, {new Date().getFullYear()}. Made with care <i className="material-icons">emoji_nature</i></p>
        </footer>
      </div>
    );
  }
}

export default App;