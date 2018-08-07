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
          <Route exact path="/" component={Welcome}/>
          <Route path="/projects/:projectId" render={() => <ProjectDetails/>}/> 
          <Route path="/about" render={() => <About/>}/>
        </header>
        <div style={{clear:'both'}}></div>
        <footer>
          <p>Copyright &copy; Patricia Ciobanu, 2018. All rights reserved.</p>
        </footer>
      </div>
    );
  }
}

export default App;