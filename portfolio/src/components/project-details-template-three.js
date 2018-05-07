import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import YouTube from 'react-youtube';

class ProjectDetailsTemplateThree extends React.Component {
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
                <h1>Synkroma</h1>
                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <img src={require('../img/synkromalogo.png')} alt="Synkroma"/>
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <p>
                            In this project we aimed to incorporate mood as a core element in
                            playlist creation. Our main idea focuse on the concept that in the same 
                            way as we outsource some of our cognitive load to the computer 
                            (e.g. notes and reminders, calculators etc.) perhaps some of our 
                            emotional state could also be seen as being outsourced to the machine.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <p>
                            Therefore, we created an application which resembles a quiz,
                            with the main and only question being: "How do you feel ?". As a 
                            result, we generate a music playlist for the user based on his or
                            her visual input, which in return symbolizes his or her current emotions.
                            This application was meant to be an addition feature on Spotify.  
                        </p>
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <img src={require('../img/synkroma1.jpg')} alt="Synkroma"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <img src={require('../img/synkroma2.jpg')} alt="Synkroma"/>
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <p>
                            Project developed by Sonia Camacho, Puspita Parahita Anindita, Nadia Campo and
                            Patricia Ciobanu.
                        </p>
                    </Col>
                </Row>
                <div className="project-video">
                    <YouTube
                        videoId="8gxsn-Kfa2M"
                        opts={opts}
                        onReady={this._onReady}
                    />
                </div>
            </div>
        );
    }
}

export default ProjectDetailsTemplateThree;