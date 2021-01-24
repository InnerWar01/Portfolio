import React from 'react';
import ProjectList from '../components/project-list';
import { modelInstance } from '../model/model';
import PortfolioMenu from '../components/portfolio-menu';
import SideMenu from '../components/side-menu';
import { Row, Col } from 'react-flexbox-grid';
import ScrollToTop from '../components/scroll-to-top';

class Welcome extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            projectsMedia: modelInstance.getProjectsMedia().data,
            page: 0,
        }
    }

    handleRedirection = (evt, projectName) => {
        window.location.assign('Portfolio/projects/' + projectName);
    }

    render () {
        return (
            <div>
                <PortfolioMenu page={this.state.page}/>
                <Row id="welcome">
                    <Col xs={12} sm={12} md={1} lg={1}>
                        <SideMenu/>
                    </Col>
                    <Col xs={12} sm={12} md={11} lg={11}>
                        <ProjectList projectsMedia={this.state.projectsMedia} handleRedirection={this.handleRedirection}/>
                        <ScrollToTop/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Welcome;
