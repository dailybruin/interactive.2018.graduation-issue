import * as React from 'react';
import './landing-page.css';
// import NavigationBar from '../NavigationBar';

const LandingSVG = require('../../assets/landing.svg');

class LandingPage extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    console.log(event);
    console.log(window.scrollY);

    const landing = document.getElementById('landing-page');
    landing!.style.opacity = `${(100 - window.scrollY) * 0.01}`;
  }

  render() {
    return (
      <div id="landing-page">
        <img id="landing-svg" src={LandingSVG} alt="" />
        <h1>graduation issue</h1>
      </div>
    );
  }
}

export default LandingPage;
