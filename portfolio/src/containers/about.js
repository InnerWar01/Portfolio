import React from 'react';
import AboutTemplate from '../components/about-template';
import PortfolioMenu from '../components/portfolio-menu';

class About extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            page: 1,
        }
    }

    render () {
        return (
            <div>
                <PortfolioMenu page={this.state.page}/>
                <AboutTemplate/>
            </div>
        );
    }
}

export default About;
