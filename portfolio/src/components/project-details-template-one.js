import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import YouTube from 'react-youtube';

class ProjectDetailsTemplateOne extends React.Component {
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    render () {
        const opts = {
            height: '400vh',
            width: '100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
              autoplay: 1
            }
        };

        return (
            <div className="content-project">
                <h1>The Tree Of Knowledge</h1>
                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <img src={require('../img/interactive-tree-1.jpg')} alt="Interactive Tree"/>
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <p>
                            For the Physical Interaction Design and Realization Project, 
                            our group decided to make the posting of one’s doctoral thesis 
                            on the tree at KTH Main Library a more interactive process. 
                            As this is a more of a symbolical step, preceding the public 
                            defence of the thesis, we wanted to provide a more memorable, 
                            interesting and fun experience.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <p>
                            The two primary components in our project were the materials and 
                            the interaction. Given that the process of hanging is an elementary 
                            action, we decided to add antecedent and subsequent interactions and 
                            feedbacks to engage and entice the user.
                        </p>
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <img src={require('../img/interactive-tree-4.jpg')} alt="Interactive Tree"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <img src={require('../img/interactive-tree-3.jpg')} alt="Interactive Tree"/>
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <p>
                            Project developed by Dani Mataruga, Magdalena Okurowska, Charlotte 
                            Skogström and Patricia Ciobanu.
                        </p>
                    </Col>
                </Row>
                <div className="project-video">
                    <YouTube
                        videoId="a1lsaXDgHmQ"
                        opts={opts}
                        onReady={this._onReady}
                    />
                </div>
            </div>
        );
    }
}

export default ProjectDetailsTemplateOne;