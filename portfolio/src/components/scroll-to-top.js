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

class ScrollToTop extends React.Component {

    handleClick = event => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

  render() {
    const { classes } = this.props;

    return (
        <div onClick={event => this.handleClick(event)} className="scroll-to-top">
          <Tooltip title="Scroll To Top">
            <Button variant="fab" color="primary" aria-label="Scroll To Top" className={classes.fab} id="scroll-to-top">
            <i className="material-icons">
              arrow_upward
            </i>
            </Button>
          </Tooltip>
        </div>
      );
  }
}

ScrollToTop.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollToTop);
