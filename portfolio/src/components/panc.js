import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import ImageModal from '../components/image-modal';

class PANC extends React.Component {
    state = {
        imgModal: 'panc.jpg',
        open: false,
        alt: 'PANC',
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
                <h1>PANC</h1>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <img src={require('../img/panc1.gif')} alt="PANC" onClick={event => this.handleImageModal(event, 'panc1.gif')}/>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                        <p>
                            As a final bachelor project we decided to create a web application
                            that initiates children into the basics of programming by making the
                            NAO robot execute different commands. Through the app the pupil follows
                            step by step the directions in order to see a result executed live.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <img src={require('../img/panc2.gif')} alt="PANC" onClick={event => this.handleImageModal(event, 'panc2.gif')}/>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                        <p>
                            The app was developed mainly in JavaScript due to us using Blockly - a library for 
                            creating visual block programming languages and editors. We used mySQL as storage for
                            the user data, programmed with PHP. Finally, in order for the app to be able to 
                            communicate with the robot we coded a Python server.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <img src={require('../img/panc3.gif')} alt="PANC" onClick={event => this.handleImageModal(event, 'panc3.gif')}/>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                        <p>
                            For this project I was responsible for successfully integrating the Blockly library
                            into the app and creating the communication with the Python server, managing and 
                            storing the user data, as well as designing and developing the UI of the PANC application.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <img src={require('../img/panc4.gif')} alt="PANC" onClick={event => this.handleImageModal(event, 'panc4.gif')}/>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                        <p>
                            The project was developed by Naomi Abitbol, Adeline Bounma and Patricia Ciobanu.
                        </p>
                        <p>
                            You can check the code <a target="_blank" rel="noopener noreferrer" href="https://github.com/InnerWar01/Projet-NAO">here</a>.
                        </p>
                    </Col>
                </Row>
                <div>
                    <img src={require('../img/panc5.gif')} alt="PANC" onClick={event => this.handleImageModal(event, 'panc5.gif')}/>
                </div>

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

export default PANC;