import React from 'react';

class SideMenu extends React.Component {

  handleRedirection = event => {
    if (event.target.tagName === "I") {
        if (event.target.id === "git") {
            window.open('https://github.com/InnerWar01/');
        } else if (event.target.id === "linkedin") {
            window.open('https://www.linkedin.com/in/patricia-ciobanu/');
        } else if (event.target.id === "instagram") {
            window.open('https://www.instagram.com/inner.war/');
        }
    }
  };
    
  render () {
      return (
        <ul className="my-social-pages">
            <li onClick={event => this.handleRedirection(event)}>
                <i className="fab fa-github fa-2x" id="git"></i>
            </li>
            <li onClick={event => this.handleRedirection(event)}>
                <i className="fab fa-linkedin fa-2x" id="linkedin"></i>
            </li>
            <li onClick={event => this.handleRedirection(event)}>
                <i className="fab fa-instagram fa-2x" id="instagram"></i>
            </li>
        </ul>
      );
  }
}

export default SideMenu;