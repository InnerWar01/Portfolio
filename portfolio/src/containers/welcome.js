import React from 'react';
import ImageButton from '../components/image-button';
import { modelInstance } from '../model/model';
import PortfolioMenu from '../components/portfolio-menu';
import SideMenu from '../components/side-menu';
import { Row, Col } from 'react-flexbox-grid';

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
                <PortfolioMenu page={this.state.page}/>
                <Row id="welcome">
                    <Col xs={12} sm={1} md={1} lg={1}>
                        <SideMenu/>
                    </Col>
                    <Col xs={12} sm={11} md={11} lg={11}>
                        <ImageButton projectsMedia={this.state.projectsMedia} handleClickButton={this.handleClickButton}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Welcome;
