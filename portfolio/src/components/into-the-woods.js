import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import ImageModal from '../components/image-modal';

class IntoTheWoods extends React.Component {

    state = {
        imgModal: 'into-the-woods.png',
        open: false,
        alt: 'Into The Woods',
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
                <h1>Into The Woods</h1>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <img src={require('../img/into-the-woods2.jpg')} alt="IntoTheWoods" onClick={event => this.handleImageModal(event, 'into-the-woods2.jpg')}/>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                        <p>
                            This is a project developed for the User Experience Design and Evaluation
                            course. The resulted design focuses on providing the feeling of being outdoors,
                            meant for someone who yearns for reliving those experiences in nature.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <img src={require('../img/into-the-woods1.jpg')} alt="IntoTheWoods" onClick={event => this.handleImageModal(event, 'into-the-woods1.jpg')}/>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                        <p>
                            The design process consisted of conducting a phenomenological interview
                            with the person for which I designed for. It served as an initial insight into
                            the topic. Then, I created three design probes which had the purpose of further 
                            diving in the topic and act as inspiration for the final designed experience.
                        </p>
                        <p>
                            Each probe focused on a specific theme that I identified from the interview: the 
                            feeling of nature as magical, the bonding that one creates with people when outdoors 
                            and finally triggers that act as reminders of outdoor experiences.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <img src={require('../img/into-the-woods5.jpg')} alt="IntoTheWoods" onClick={event => this.handleImageModal(event, 'into-the-woods5.jpg')}/>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                        <p>
                            When making this first design probe, I envisioned the feeling that one would have 
                            writing on leaves. As many things in nature, leaves quickly disintegrate, which 
                            recalled me of those fleeting moments when we are reminded of something and in seconds 
                            it is no more. Each leaf corresponds to a recollection – a moment when one is reminded 
                            of an outdoor experience, or something else that relates to the feeling of being in nature. 
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <img src={require('../img/into-the-woods6.jpg')} alt="IntoTheWoods" onClick={event => this.handleImageModal(event, 'into-the-woods6.jpg')}/>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                        <p>
                            The inspiration for this second probe came from the many stories that we have read as children, 
                            where fairy dust would be kept in these small bags. The dust has, of course, magical properties, 
                            which perfectly embodies that feeling of wonder when we were in nature as children. The design probe 
                            consists of a medium-small size drawstring bag, thus it can be carried in a backpack. Inside, a scroll 
                            of paper can be found on which I wanted for my participant to write the object name and a short description 
                            of why this object has been chosen. This design probe was meant to trigger that feeling of awareness. Every 
                            time one had an outdoor experience that they could consider not necessarily as magical, but meaningful and 
                            memorable, I wanted them to pick an object that expresses and embodies that moment.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <img src={require('../img/into-the-woods7.jpg')} alt="IntoTheWoods" onClick={event => this.handleImageModal(event, 'into-the-woods7.jpg')}/>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                        <p>
                            In this last design probe I wanted to depict some details that I learned from the phenomenological interview, 
                            such as: hiking as a favorite outdoor activity, the moment of getting to the top of a summit, seeing a 
                            breathtaking view and feeling accomplished that they reached the top. Furthermore, I wanted the probe to 
                            incorporate the fact that the destination shouldn’t always be considered as a priority, but to remember and 
                            be fully aware of the journey instead. The purpose of this probe is to engage the participant into thinking of 
                            experiences where significant moments of bonding occurred and briefly describe them.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <img src={require('../img/into-the-woods4.gif')} alt="IntoTheWoods" onClick={event => this.handleImageModal(event, 'into-the-woods4.gif')}/>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                        <p>
                            Thus, the design idea consists of two parts: an application and a physical prototype. The digital part has the 
                            purpose of recording the sound of the experience, as well as some weather data from that day (based on location) and 
                            then upload it to the physical artifact. As sound recordings aren't usually used as objects of reminiscence, I considered 
                            it to be an unusual way of provoking those forgotten memories.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <img src={require('../img/into-the-woods3.jpg')} alt="IntoTheWoods" onClick={event => this.handleImageModal(event, 'into-the-woods3.jpg')}/>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                        <p>
                            The physical artifact initiates the interaction. Thus, when it is the date of a certain outdoor experience, the pine
                            cone will pulsate subtle light. Once it is picked up, multiple colors will emanate through the object, signifying that
                            the next step can be taken. Therefore, the pine cone is opened by rotating the crystal. As the pine cone is opened, 
                            the inside projecting lamp emits light that reflects the weather on that date along with emitting the sounds of the recording.
                        </p>
                        <p>
                            An interesting result of the designed experience is that during the first year, there will be no interaction with the physical 
                            artifact as there will be no previous experiences that are recorded. In this way, the artifact isn't intruding and entices the user
                            to interact with it rather than compeling them. 
                        </p>
                    </Col>
                </Row>

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

export default IntoTheWoods;