import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'none',
  },
  gridList: {
    width: '60%',
    height: 'auto',
  },
  project: {
    '&:hover': {
      cursor: 'pointer',
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.4,
      },
      '& $imageTitle': {
        border: '2px solid currentColor',
      },
    }
  },
  imageBackdrop: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.common.black,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
    transition: theme.transitions.create('border'),
  },
});

const projectData = [
  {
    year: "2018",
    projects:[
      {
        id: 6,
        img: require('../img/sentify.png'),
        title: 'Sentify',
        name: 'sentify',
      },
      {
        id: 5,
        img: require('../img/interactive-tree-1.jpg'),
        title: 'Interactive Tree',
        name: 'interactive-tree',
      },
  ]},
  {
    year: "2017",
    projects:[
    {
      id: 4,
      img: require('../img/lumobok.jpg'),
      title: 'Lumobok',
      name: 'lumobok',
    },
    {
      id: 3,
      img: require('../img/synkroma2.jpg'),
      title: 'Synkroma',
      name: 'synkroma',
    },
    {
      id: 2,
      img: require('../img/panc.jpg'),
      title: 'PANC',
      name: 'panc',
    }
  ]},
  {
    year: "2016",
    projects:[
    {
      id: 1,
      img: require('../img/travel-australia.jpg'),
      title: 'Travel to Australia',
      name: 'travel-australia',
    },
  ]}
];

function ProjectGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root} id="project-list">
      {projectData.map(period => (
        <GridList cellHeight={180} className={classes.gridList} key={period.year}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">{period.year}</ListSubheader>
          </GridListTile>
          {period.projects.map(project => (
            <GridListTile key={project.id} onClick={event => props.handleRedirection(event, project.name)} className={classes.project}>
              <img src={project.img} alt={project.title} className={classes.imageBackdrop}/>
              <GridListTileBar
                title={project.title}
                className={classes.imageTitle}
              />
            </GridListTile>
          ))}
        </GridList>
      ))}
    </div>
  );
}

ProjectGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectGridList);