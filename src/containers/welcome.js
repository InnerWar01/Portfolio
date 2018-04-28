import React from 'react';
import ImageButton from '../components/image-button';
import { modelInstance } from '../model/model';

class Welcome extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            projectsMedia: modelInstance.getProjectsMedia().data,
        }
    }

    render () {
        return (
            <ImageButton projectsMedia={this.state.projectsMedia}/>
        );
    }
}

export default Welcome;
