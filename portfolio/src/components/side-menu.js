import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit * 2,
  },
});

class SideMenu extends React.Component {

    handleRedirection = event => {
        let btn = event.target.closest("button");

        if (btn.id === "git") {
            window.open('https://github.com/InnerWar01/');
        } else if (btn.id === "linkedin") {
            window.open('https://www.linkedin.com/in/patricia-ciobanu/');
        } else if (btn.id === "email") {
            window.open('mailto:patricia@dsv.su.se');
        }
    };

  render() {
    const { classes } = this.props;

    return (
        <div onClick={event => this.handleRedirection(event)} className="my-social-pages">
          <Tooltip title="Git Hub">
            <Button variant="fab" color="primary" aria-label="Git Hub" className={classes.fab} id="git">
                <i className="fab fa-github fa-2x"></i>
            </Button>
          </Tooltip>
          <Tooltip title="LinkedIn">
            <Button variant="fab" color="primary" aria-label="LinkedIn" className={classes.fab} id="linkedin">
                <i className="fab fa-linkedin fa-2x"></i>
            </Button>
          </Tooltip>
          <Tooltip title="Email">
            <Button variant="fab" color="primary" aria-label="email" className={classes.fab} id="email">
              <i className="material-icons">alternate_email</i>
            </Button>
          </Tooltip>
        </div>
      );
  }
}

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideMenu);
