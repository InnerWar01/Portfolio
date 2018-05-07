import React from 'react';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';

class PortfolioMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleRedirection = event => {
    this.setState({ anchorEl: null });

    if (event.target.textContent === "About") {
      window.location.assign('/about');
    }
    else if (event.target.textContent === "Portfolio") {
      window.location.assign('/');
    }
    else if (event.target.tagName === "I") {
      if (event.target.id === "git") {
        window.location.assign('https://github.com/InnerWar01/');
      } else if (event.target.id === "linkedin") {
        window.location.assign('https://www.linkedin.com/in/patricia-ciobanu/');
      }
    }
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div className="portfolio-menu">
        <IconButton
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={event => this.handleRedirection(event)}>About</MenuItem>
          <MenuItem onClick={event => this.handleRedirection(event)}>Portfolio</MenuItem>
          <MenuItem onClick={event => this.handleRedirection(event)}>
            <i className="fab fa-github fa-2x" id="git"></i>
          </MenuItem>
          <MenuItem onClick={event => this.handleRedirection(event)}>
            <i className="fab fa-linkedin fa-2x" id="linkedin"></i>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default PortfolioMenu;