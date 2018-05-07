import React from 'react';
import './styles/about.css';
import AboutContainer from './containers/about';

class About extends React.Component {
  render () {
    return (
      <div className="container-about">
        <AboutContainer/>
      </div>
    );
  }
}

export default About;