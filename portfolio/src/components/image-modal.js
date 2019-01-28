import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    textAlign: 'center',
    width: theme.spacing.unit * 100,
    height: 'fit-content',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 2,
    outline: 'none',
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing.unit * 40,
      padding: theme.spacing.unit,
    },
  },
});

class ImageModal extends React.Component {
  state = {
    open: this.props.open,
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.open}
          onClose={this.props.handleClose}
          className="image-modal"
        >
          <div style={getModalStyle()} className={classes.paper + ' image-modal-content'}>
            <img src={require('../img/' + this.props.img)} alt={this.props.alt}/>
          </div>
        </Modal>
      </div>
    );
  }
}

ImageModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageModal);