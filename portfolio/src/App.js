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
          <Route exact path="/" component={Welcome}/>
          <Route path="/projects/:projectId" render={() => <ProjectDetails/>}/> 
          <Route path="/about" render={() => <About/>}/>
          <footer>
            <p>Copyright &copy; Patricia Ciobanu, 2018. All rights reserved.</p>
          </footer>
        </header>
      </div>
    );
  }
}

export default App;