import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import ImageModal from '../components/image-modal';

class MasterThesis extends React.Component {
    state = {
        imgModal: 'master-thesis.jpg',
        open: false,
        alt: 'Master Thesis',
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
                <h1>Master Thesis</h1>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <img src={require('../img/master-thesis.jpg')} alt="Master Thesis" onClick={event => this.handleImageModal(event, 'master-thesis.jpg')}/>
                        <p className="img-caption">By visual artist Nunzio Paci</p>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                        <p>
                            As technology has become a significant agent in the current multispecies kinship, creating a beneficial collaboration between all 
                            members of the ecosystem has become a challenge. In this paper, my emphasis is on combining all components, human and non-human and 
                            I am concerned with understanding how is it different to care for something other than human, the trouble with caring and transforming 
                            multispecies relationships into matters of care rather than matters of concern, and methodologies in decentering the human from design 
                            to break the boundaries of the body in order to understand how to design for more than human relationships. By following a Research Through 
                            Design approach, I am questioning human-centered methodologies through two activities: a cultural probe which pragmatically addresses notions 
                            of collaboration between humans and their ecosystem by fostering care, and an orienting activity that focuses on conceptually questioning 
                            what it means to be human and breaking the boundaries of the human body.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <img src={require('../img/master-thesis1.gif')} alt="Juniper - a cultural probe" onClick={event => this.handleImageModal(event, 'master-thesis1.gif')}/>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                         <p>
                            Full info on the project will come soon! Meanwhile, check how I made the  <a target="_blank" rel="noopener noreferrer" href="https://www.instructables.com/id/Juniper/">cultural probe</a>, an important aspect in my master thesis!
                        </p>
                        <p>
                            Project developed by Patricia Ciobanu, under the supervision of <a target="_blank" rel="noopener noreferrer" href="https://www.kareyhelms.com/">Karey Helms</a>.
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

export default MasterThesis;