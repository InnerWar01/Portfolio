import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

class TravelAustralia extends React.Component {

    render () {

        return (
            <div className="content-project">
                <h1>Travel to Australia</h1>
                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <img src={require('../img/travel-australia1.gif')} alt="TravelAustralia"/>
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
                        <img src={require('../img/travel-australia2.gif')} alt="TravelAustralia"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <img src={require('../img/travel-australia3.gif')} alt="TravelAustralia"/>
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
                        <img src={require('../img/travel-australia5.gif')} alt="TravelAustralia"/>
                    </Col>
                </Row>
                <div>
                    <img src={require('../img/travel-australia4.gif')} alt="TravelAustralia"/>
                </div>
            </div>
        );
    }
}

export default TravelAustralia;