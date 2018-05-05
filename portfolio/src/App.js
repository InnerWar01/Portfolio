import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Welcome from './containers/welcome';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Portfolio',
      authorName: 'Patricia Ciobanu',
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3 className="App-title">{this.state.title} / {this.state.authorName}</h3>
          <Route exact path="/" component={Welcome}/>
        </header>
      </div>
    );
  }
}

export default App;