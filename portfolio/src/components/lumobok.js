import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import YouTube from 'react-youtube';

class Lumobok extends React.Component {
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
                <h1>Lumobok</h1>
                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <img src={require('../img/lumobok.jpg')} alt="Lumobok"/>
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <p>
                            This project aims to redefine the concept of the book, 
                            by enhancing its familiar experience with projected visuals, 
                            haptic interaction and sound feedback. Physical prototyping has 
                            led to a robust interaction with haptic input modes of touch, 
                            release and hold.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <p>
                            Lumobok was designed with flexibility of its content in mind, and 
                            the produced prototype includes six pages of dynamic content with 
                            the theme of environmental sustainability. Signals from the analog 
                            triggers of conductive ink were  connected to copper tape and 
                            subsequently digitized in a microcontroller to generate visual and 
                            audio content. The six pages of content include an introductory cover, 
                            a multiple choice quiz, a multiplayer game and a lifestyle quiz with 
                            corresponding responsive landscape. 
                        </p>
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <img src={require('../img/lumo1.gif')} alt="Lumobok"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <img src={require('../img/lumo3.gif')} alt="Lumobok"/>
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <p>
                            For this project I had the opportunity to work for the first time with Unity.
                            I was responsible for creating the content for the first page of the book. It consisted
                            of a set of 10 questions, each with 4 possible answers. A sound feedback was added, 
                            depending on whether the user correctly or incorrectly answered the question. When the
                            quiz was finished, based on the score, the user was either congratulated or encouraged to
                            try one more time.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <p>
                            Project developed by Sonia Camacho, Andreas Almqvist, Nadia Campo and
                            Patricia Ciobanu.
                        </p>
                        <p>
                            You can check the code <a target="_blank" rel="noopener noreferrer" href="https://github.com/InnerWar01/Lumobok">here</a>.
                        </p>
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <img src={require('../img/lumo4.gif')} alt="Lumobok"/>
                    </Col>
                </Row>
                <div className="project-video">
                    <YouTube
                        videoId="wGMuoyQ7sis"
                        opts={opts}
                        onReady={this._onReady}
                    />
                </div>
            </div>
        );
    }
}

export default Lumobok;