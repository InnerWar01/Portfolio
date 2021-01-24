import React from 'react';
//import { Row, Col } from 'react-flexbox-grid';
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
                {/* <Row>
                    <Col xs={12} sm={12} md={12}>
                        <img src={require('../img/master-thesis.jpg')} alt="Master Thesis" onClick={event => this.handleImageModal(event, 'master-thesis.jpg')}/>
                        <p className="img-caption">Juniper - a cultural probe and an Extended Body Map</p>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                        <h2>Abstract</h2>
                        <p>
                            In the current climate crisis, creating a symbiotic collaboration between all members of an
                            ecosystem has become a prominent topic. By reevaluating human-centered methodologies
                            through a cultural probe and an orienting activity, I address notions of collaboration,
                            cohabitation and extending one’s body beyond the skin. I explore the concept of care in
                            human-plant relationships, along with understanding the trouble with designing for and
                            with care in the context of human-nature-technology kinship. The cultural probe, through its
                            ambiguity, has prompted reflections on care and multispecies kinship, whereas the orienting
                            activity has been an attempt to potentially shift to a non-anthropocentric perspective. A
                            materialization of speculative thinking, these activities are a first step in challenging human
                            exceptionalism, a new approach to viewing the human as decentered in design. This paper
                            positions care as a premise in addressing human-centered methodologies to include
                            non-human actors, with prototypes and speculative design as techniques that facilitate
                            approaching a challenging and complex topic as one of more-than-human assemblages.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12}>
                        <img src={require('../img/master-thesis1.gif')} alt="Juniper - a cultural probe" onClick={event => this.handleImageModal(event, 'master-thesis1.gif')}/>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                         <p>
                            Instructable on how I created the cultural probe <a target="_blank" rel="noopener noreferrer" href="https://www.instructables.com/id/Juniper/">here</a>.
                        </p>
                        <p>
                            Link to degree project <a target="_blank" rel="noopener noreferrer" href="http://kth.diva-portal.org/smash/record.jsf?pid=diva2%3A1337125&dswid=5246">here</a>!
                        </p>
                        <p>
                            Project developed by Patricia Ciobanu, under the supervision of 
                            <a target="_blank" rel="noopener noreferrer" href="https://www.kareyhelms.com/"> Karey Helms</a> and 
                            <a target="_blank" rel="noopener noreferrer" href="https://www.kth.se/profile/ciolfi/"> Marianela Ciolfi Felice</a>, 
                            <a target="_blank" rel="noopener noreferrer" href="https://scholar.google.com/citations?user=LZJ0YvAAAAAJ&amp;hl=en&amp;oi=ao"> Kristina Höök</a> as examiner.
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

export default MasterThesis;