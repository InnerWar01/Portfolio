import React from 'react';
import './styles/welcome.css';
import WelcomeContainer from './containers/welcome';

class Welcome extends React.Component {
  render () {
    return (
      <div className="container-welcome">
        <WelcomeContainer/>
      </div>
    );
  }
}

export default Welcome;