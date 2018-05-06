import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Icon from 'material-ui/Icon';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
});

function Icons(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Icon className={classes.icon} color="primary" style={{ fontSize: 30 }}>
        build
      </Icon>
    </div>
  );
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Icons);