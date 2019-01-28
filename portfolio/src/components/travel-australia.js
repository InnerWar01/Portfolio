import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import ImageModal from '../components/image-modal';

class TravelAustralia extends React.Component {
    state = {
        imgModal: 'travel-australia.jpg',
        open: false,
        alt: 'Sentify',
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
                <h1>Travel to Australia</h1>
                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <img src={require('../img/travel-australia2.gif')} alt="TravelAustralia" onClick={event => this.handleImageModal(event, 'travel-australia2.gif')}/>
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <p>
                            This is a website dedicated to those who would like to visit Australia.
                            It was done as a project for a course in my second year of bachelor. 
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <p>
                            The app was developed mainly in PHP. All the database handling was done through
                            mySQL.
                        </p>
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <img src={require('../img/travel-australia3.gif')} alt="TravelAustralia" onClick={event => this.handleImageModal(event, 'travel-australia3.gif')}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <img src={require('../img/travel-australia6.gif')} alt="TravelAustralia" onClick={event => this.handleImageModal(event, 'travel-australia6.gif')}/>
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <p>
                            For this project I was responsible for creating the User Interface,
                            for creating the user space with the data handling (user information and reservations).
                            Additionnally, I created the blog section as well.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <p>
                            The project was developed by Wenjing Wu, Adeline Bounma and Patricia Ciobanu.
                        </p>
                        <p>
                            You can check the code <a target="_blank" rel="noopener noreferrer" href="https://github.com/InnerWar01/Travel-Website">here</a>.
                        </p>
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <img src={require('../img/travel-australia5.gif')} alt="TravelAustralia" onClick={event => this.handleImageModal(event, 'travel-australia5.gif')}/>
                    </Col>
                </Row>
                <div>
                    <img src={require('../img/travel-australia4.gif')} alt="TravelAustralia" onClick={event => this.handleImageModal(event, 'travel-australia4.gif')}/>
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

export default TravelAustralia;