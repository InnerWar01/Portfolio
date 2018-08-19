import React from 'react';
import './styles/project-details.css';
import ProjectDetailsContainer from './containers/project-details';
import { withRouter } from 'react-router-dom';

class ProjectDetails extends React.Component {
  render () {
    let {match} = this.props;
    let name = match.params.projectName;

    return (
      <div className="container-project-details">
        <ProjectDetailsContainer projectName={name}/>
      </div>
    );
  }
}

export default withRouter(ProjectDetails);