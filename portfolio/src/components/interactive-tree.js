import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import YouTube from 'react-youtube';
import ImageModal from '../components/image-modal';

class InteractiveTree extends React.Component {
    state = {
        imgModal: 'interactive-tree-1.jpg',
        open: false,
        alt: 'Interactive Tree',
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
                    <Col xs={12} sm={12} md={12}>
                        <img src={require('../img/interactive-tree-1.jpg')} alt="Interactive Tree" onClick={event => this.handleImageModal(event, 'interactive-tree-1.jpg')}/>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                        <p>
                            For the Physical Interaction Design and Realization course, 
                            our group decided to do a project that would make the posting 
                            of one’s doctoral thesis on the tree at KTH Main Library a more 
                            interactive and meaningful process. 
                            As this is a more of a symbolical step, preceding the public 
                            defence of the thesis, we wanted to provide a more memorable, 
                            interesting and fun experience.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <img src={require('../img/interactive-tree-5.jpg')} alt="Interactive Tree" onClick={event => this.handleImageModal(event, 'interactive-tree-5.jpg')}/>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                        <p>
                            The two primary components in our project were the materials and 
                            the interaction. Given that the process of hanging is an elementary 
                            action, we decided to add antecedent and subsequent interactions and 
                            feedbacks to engage and entice the user.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <img src={require('../img/interactive-tree-4.jpg')} alt="Interactive Tree" onClick={event => this.handleImageModal(event, 'interactive-tree-4.jpg')}/>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                        <p>
                            I was involved in all of the stages of designing, developing and building
                            the tree. I wanted to be able to explore and learn new skills such as soldering,
                            working with electronics and programming them. I mostly worked on making the initial
                            design of our prototype, of exploring the interactions that could be added. Additionnally,
                            I programmed the initial version of each of the following components: the bathroom scale, 
                            the LEDs and the servos. 
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <img src={require('../img/interactive-tree-3.jpg')} alt="Interactive Tree" onClick={event => this.handleImageModal(event, 'interactive-tree-3.jpg')}/>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                        <p>
                            Project developed by Dani Mataruga, Magdalena Okurowska, Charlotte 
                            Skogström and Patricia Ciobanu.
                        </p>
                        <p>
                            You can check the instructable <a target="_blank" rel="noopener noreferrer" href="https://www.instructables.com/id/Interactive-Tree/">here</a> for a more in-depth view on how the tree was built.
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

export default InteractiveTree;