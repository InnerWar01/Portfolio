import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Player } from 'video-react';
import "video-react/dist/video-react.css";

class ProjectDetailsTemplateTwo extends React.Component {
    render () {
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
                        <img src={require('../img/lumo4.gif')} alt="Lumobok"/>
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <p>
                            Project developed by Sonia Camacho, Andreas Almqvist, Nadia Campo and
                            Patricia Ciobanu.
                        </p>
                    </Col>
                </Row>
                <div className="project-video">
                    <Player
                        playsInline
                        poster={require('../img/lumo2.gif')}
                        src={require('../videos/Lumobok.mov')}
                    />
                </div>
            </div>
        );
    }
}

export default ProjectDetailsTemplateTwo;