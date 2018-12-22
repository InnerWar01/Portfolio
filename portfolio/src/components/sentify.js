import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

class Sentify extends React.Component {

    render () {

        return (
            <div className="content-project">
                <h1>Sentify</h1>
                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <img src={require('../img/sentify1.gif')} alt="Sentify"/>
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <p>
                            This is a project developed for the Interaction Programming and the
                            Dynamic Web course. The purpose of the application is to provide the 
                            sentiment analysis of the tweets based on a user-chosen string and
                            geographical area.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <p>
                            We used the <a target="_blank" rel="noopener noreferrer" href="https://developer.twitter.com/">Twitter API</a> to get the tweets, 
                            a <a target="_blank" rel="noopener noreferrer" href="http://help.sentiment140.com/api">Sentiment API</a> that returns the
                            sentiment analysis to a bundle of tweets  
                            and <a target="_blank" rel="noopener noreferrer" href="https://www.mapbox.com/api-documentation/#introduction ">Mapbox</a> which was used to show and 
                            interact with the map. All the user specific data was stored with Firebase. The web app was developed in JavaScript.
                        </p>
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <img src={require('../img/sentify2.gif')} alt="Sentify"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <img src={require('../img/sentify3.gif')} alt="Sentify"/>
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <p>
                            During this project I have mostly written code related to the layout and the components’ functionalities. 
                            Regarding the functionalities that are implemented, for the my-searches page I have written the initial 
                            version of the page, which was working with hard coded data. All the included components, such as 
                            create-pdf-modal, delete-my-searches-modal, delete-my-searches, sentiment-pdf, search-nav and my-searches-table 
                            I have implemented in the initial setting (without firebase). I also worked with creating and saving a pdf of the 
                            search, both in the discover page as in my-searches. Additionally, I worked on creating the pie-chart. 
                            Finally, I was also responsible for making sure that the layout would remain intact during different changes and 
                            that it is responsive.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <p>
                            The project was developed by Patricia Ciobanu, Kristoffer Brown, Sahand Zarrinkoub and 
                            Niek Bijman.
                        </p>
                        <p>
                            You can check how the web application works <a target="_blank" rel="noopener noreferrer" href="https://sentify-kth.herokuapp.com/discover">here</a> and 
                            the code <a target="_blank" rel="noopener noreferrer" href="https://github.com/NiekBijman/Sentify">here</a>.
                        </p>
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <img src={require('../img/sentify4.gif')} alt="Sentify"/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Sentify;