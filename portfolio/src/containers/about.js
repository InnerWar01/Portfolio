import React from 'react';
import AboutTemplate from '../components/about-template';
import PortfolioMenu from '../components/portfolio-menu';
import SideMenu from '../components/side-menu';

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
                <SideMenu/>
                <AboutTemplate/>
            </div>
        );
    }
}

export default About;
