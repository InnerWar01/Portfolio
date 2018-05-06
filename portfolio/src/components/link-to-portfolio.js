import React from 'react';
import { Link } from 'react-router-dom';
import { modelInstance } from '../model/model';
import { Row, Col } from 'react-flexbox-grid';

class LinkToPortfolio extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            page: this.props.page,
        }
    }

    render () {
        let link = null;

        switch (this.state.page) {
            case 0:
                link = <h3> Portfolio / Patricia Ciobanu </h3>
                break;
            case 1:
                link = <h3> <Link to="/">
                                <span className="link-to-portfolio">Portfolio</span>
                            </Link> / {modelInstance.getProjectTitleById(this.state.page)}
                    </h3>
                break;
            case 2:
                link = <h3> <Link to="/">
                                <span className="link-to-portfolio">Portfolio</span>
                            </Link> / {modelInstance.getProjectTitleById(this.state.page)}
                    </h3>
                break;
            case 3:
                link = <h3> <Link to="/">
                                <span className="link-to-portfolio">Portfolio</span>
                            </Link> / {modelInstance.getProjectTitleById(this.state.page)}
                    </h3>
                break;
            default:
                link = <h3> <Link to="/">
                                <span className="link-to-portfolio">Portfolio</span>
                            </Link>
                    </h3>
                break;
        }

        return (
            <Row className="header">
                <Col xs={8} sm={8} md={8}>
                    {link}
                </Col>
                <Col xs={4} sm={4} md={4}>
                    <a href="https://github.com/InnerWar01/" className="link-to-github">
                        <i className="fab fa-github fa-2x"></i>
                    </a>    
                </Col>
            </Row>
        );
    }
}

export default LinkToPortfolio;