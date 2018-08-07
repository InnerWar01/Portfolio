import React from 'react';
import AboutTemplate from '../components/about-template';
import PortfolioMenu from '../components/portfolio-menu';

class About extends React.Component {
    render () {
        return (
            <div>
                <PortfolioMenu/>
                <AboutTemplate/>
            </div>
        );
    }
}

export default About;
