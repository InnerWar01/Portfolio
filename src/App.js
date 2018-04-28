import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import About from "./containers/about";
import Welcome from './containers/welcome';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Portfolio',
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.title}</h1>
          <Route exact path="/" component={Welcome}/>
          {/* <Route exact path="/about" component={About}/> */}
        </header>
      </div>
    );
  }
}

export default App;
