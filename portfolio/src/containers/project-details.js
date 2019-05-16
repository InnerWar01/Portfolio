import React from 'react';
import IntoTheWoods from '../components/into-the-woods';
import InteractiveTree from '../components/interactive-tree';
import Lumobok from '../components/lumobok';
import Synkroma from '../components/synkroma';
import Sentify from '../components/sentify';
import PANC from '../components/panc';
import TravelAustralia from '../components/travel-australia';
import BuildIcon from '../components/build-icon';
import PortfolioMenu from '../components/portfolio-menu';
import SideMenu from '../components/side-menu';
import ScrollToTop from '../components/scroll-to-top';
import MasterThesis from '../components/master-thesis';

class ProjectDetails extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            projectName: this.props.projectName,
        }
    }

    render () {
        let projectTemplate = null;

        switch (this.state.projectName) {
            case "into-the-woods":
                projectTemplate = <IntoTheWoods/>
                break;
            case "interactive-tree":
                projectTemplate = <InteractiveTree/>
                break;
            case "lumobok":
                projectTemplate = <Lumobok/>
                break;
            case "synkroma":
                projectTemplate = <Synkroma/>
                break;
            case "sentify":
                projectTemplate = <Sentify/>
                break;
            case "panc":
                projectTemplate = <PANC/>
                break;
            case "travel-australia":
                projectTemplate = <TravelAustralia/>
                break;
            case "master-thesis":
                projectTemplate = <MasterThesis/>
                break;
            default:
                projectTemplate = <div><BuildIcon/><p className="no-project">Project is under development</p></div>
                break;
        }

        return (
            <div>
                <PortfolioMenu/>
                <SideMenu/>
                {projectTemplate}
                <ScrollToTop/>
            </div>
        );
    }
}

export default ProjectDetails;