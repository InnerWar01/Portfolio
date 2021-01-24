import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

class PortfolioMenu extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        page: this.props.page,
    }
  }

  handleRedirection = event => {
    if (event.target.textContent === "About" && this.state.page !== 1) {
      window.location.assign('/about');
    }
    else if (event.target.textContent === "Projects" && this.state.page !== 0) {
      window.location.assign('/Portfolio');
    }
  };
    
  render () {
      return (
          <div id="menu" className="navbar" role="navigation">
            <Row className="nav navbar-nav">
              <Col xs={6} sm={6} md={6} className={this.state.page === 0 ? "menu-item active" : "menu-item"} onClick={event => this.handleRedirection(event)}>Projects</Col>
              <Col xs={6} sm={6} md={6} className={this.state.page === 1 ? "menu-item active" : "menu-item"} onClick={event => this.handleRedirection(event)}>About</Col>
            </Row>
          </div>
      );
  }
}

export default PortfolioMenu;