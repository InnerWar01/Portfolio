import React from 'react';
import ImageButton from '../components/image-button';
import { modelInstance } from '../model/model';
import PortfolioMenu from '../components/portfolio-menu';

class Welcome extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            projectsMedia: modelInstance.getProjectsMedia().data,
        }
    }

    handleClickButton = (evt, id) => {
        window.location.assign('/projects/' + id);
    }

    render () {
        return (
            <div>
                <PortfolioMenu/>
                <ImageButton projectsMedia={this.state.projectsMedia} handleClickButton={this.handleClickButton}/>
            </div>
        );
    }
}

export default Welcome;
