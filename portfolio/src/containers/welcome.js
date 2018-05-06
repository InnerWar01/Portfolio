import React from 'react';
import ImageButton from '../components/image-button';
import { modelInstance } from '../model/model';
import LinkToPortfolio from '../components/link-to-portfolio';

class Welcome extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            projectsMedia: modelInstance.getProjectsMedia().data,
            page: 0,
        }
    }

    handleClickButton = (evt, id) => {
        window.location.assign('/projects/' + id);
    }

    render () {
        return (
            <div>
                <LinkToPortfolio page={this.state.page}/>
                <ImageButton projectsMedia={this.state.projectsMedia} handleClickButton={this.handleClickButton}/>
            </div>
        );
    }
}

export default Welcome;
