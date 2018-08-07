import React from 'react';
import ProjectDetailsTemplateOne from '../components/project-details-template-one';
import ProjectDetailsTemplateTwo from '../components/project-details-template-two';
import ProjectDetailsTemplateThree from '../components/project-details-template-three';
import BuildIcon from '../components/build-icon';
import PortfolioMenu from '../components/portfolio-menu';

class ProjectDetails extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            projectId: this.props.projectId,
        }
    }

    render () {
        let projectTemplate = null;

        switch (this.state.projectId) {
            case "1":
                projectTemplate = <ProjectDetailsTemplateOne/>
                break;
            case "2":
                projectTemplate = <ProjectDetailsTemplateTwo/>
                break;
            case "3":
                projectTemplate = <ProjectDetailsTemplateThree/>
                break;
            default:
                projectTemplate = <div><BuildIcon/><p className="no-project">Project is under development</p></div>
                break;
        }

        return (
            <div>
                <PortfolioMenu/>
                {projectTemplate}
            </div>
        );
    }
}

export default ProjectDetails;