import React from 'react';
import AboutTemplate from '../components/about-template';
import LinkToPortfolio from '../components/link-to-portfolio';

class About extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            page: 4,
        }
    }

    render () {
        return (
            <div>
                <LinkToPortfolio page={this.state.page}/>
                <AboutTemplate/>
            </div>
        );
    }
}

export default About;
