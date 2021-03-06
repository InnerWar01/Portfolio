import React from 'react';
//import { Row, Col } from 'react-flexbox-grid';
import ImageModal from '../components/image-modal';

class Synkroma extends React.Component {
    state = {
        imgModal: 'synkroma2.jpg',
        open: false,
        alt: 'Synkroma',
    };

    handleCloseImageModal = () => {
        this.setState({
            open: false
        });
    };

    handleImageModal = (event, imgName) => {
        this.setState({
            open: true,
            imgModal: imgName,
        });
    }

    render () {
        return (
            <div className="content-project">
                <h1>Synkroma</h1>
                {/* <Row>
                    <Col xs={12} sm={12} md={12}>
                        <img src={require('../img/synkroma2.jpg')} alt="Synkroma" onClick={event => this.handleImageModal(event, 'synkroma2.jpg')}/>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                        <p>
                            In this project we aimed to incorporate mood as a core element in
                            playlist creation. Our main idea focused on the concept that in the same 
                            way as we outsource some of our cognitive load to the computer 
                            (e.g. notes and reminders, calculators etc.) perhaps some of our 
                            emotional state could also be seen as being outsourced to the machine.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <img src={require('../img/synkroma6.gif')} alt="Synkroma" onClick={event => this.handleImageModal(event, 'synkroma6.gif')}/>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                        <p>
                            Therefore, we created an application which resembles a quiz,
                            with the main and only question being: "What are you feeling ?". As a 
                            result, we generate a music playlist for the user based on his or
                            her visual input, which in return symbolizes his or her current emotions.
                            This application was meant to be an addition feature on Spotify.  
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <img src={require('../img/synkroma5.gif')} alt="Synkroma" onClick={event => this.handleImageModal(event, 'synkroma5.gif')}/>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                        <p>
                            I was responsible for programming the web application (developed in HTML and JavaScript),
                            specifically creating the quiz and connecting our app to the Spotify through their API. 
                            Our purpose was to learn about all the different stages when designing and creating a prototype
                            by using the Double Diamond method.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <img src={require('../img/synkromalogo.png')} alt="Synkroma" onClick={event => this.handleImageModal(event, 'synkromalogo.png')}/>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                        <p>
                            The project was developed by Sonia Camacho, Puspita Parahita Anindita, Nadia Campo and
                            Patricia Ciobanu.
                        </p>
                        <p>
                            You can check the code <a target="_blank" rel="noopener noreferrer" href="https://github.com/nadiacw/synkroma">here</a>.
                        </p>
                    </Col>
                </Row> */}

                {/* Image Modal */}
                <ImageModal 
                    img={this.state.imgModal}
                    alt={this.state.alt}
                    open={this.state.open}
                    handleClose={this.handleCloseImageModal}
                />
            </div>
        );
    }
}

export default Synkroma;