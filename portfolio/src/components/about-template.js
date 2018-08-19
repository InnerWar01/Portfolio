import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Avatar from '../components/avatar';

class AboutTemplate extends React.Component {
    render () {
        return (
            <div className="content-about">
                <Row>
                    <Col xs={12} sm={4} md={4}>
                        <Avatar/>
                    </Col>
                    <Col xs={12} sm={8} md={8}>
                        <p id="about-text">
                            Hi ! I'm Patricia and if you are here then you may want to know more about me.
                            Well, the short version would be that I am currently a master student in 
                            Interactive Media Technology at KTH Royal Institute of Technology in Stockholm.
                            The projects that you have seen have been made with immense pleasure and dedication, and I hope
                            that I can do more of them in the future. If you want to contact me, or ask me 
                            about the projects, you can access my LinkedIn profile from the side menu. Happy Exploring !
                        </p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AboutTemplate;