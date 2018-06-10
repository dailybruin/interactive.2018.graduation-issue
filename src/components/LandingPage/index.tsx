import * as React from 'react';
import './landing-page.css';
import NavigationBar from '../NavigationBar';

const LandingSVG = require('../../assets/landing.svg');
console.log(LandingSVG);

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.landing = null;
  }
  componentDidMount() {
    this.landing = document.getElementById('landingDiv');
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    // console.log(event);
    // console.log(window.scrollY);
    // this.landing.style.opacity = `${(100 - window.scrollY) * 0.01}`;
  }

  render() {
    return (
      <div id="landingDiv">
        <div id="landingSvg">
          <img src={LandingSVG} />
        </div>
        <div id="navbar">
          <h1 id="gradIssueH1">graduation issue</h1>
          <NavigationBar sections={this.props.sections} />
        </div>
      </div>
    );
  }
}

export default LandingPage;
