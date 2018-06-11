import * as React from 'react';
import './landing-page.css';
import NavigationBar from '../NavigationBar';

const LandingSVG = require('../../assets/landing.svg');

interface LandingPageProps {
  sections: any[];
}

class LandingPage extends React.Component<LandingPageProps, {}> {
  landing: HTMLElement | null = null;
  landingDiv: HTMLElement | null = null;
  title: HTMLElement | null = null;
  nav: HTMLElement | null = null;
  navbar: HTMLElement | null = null;
  svg: HTMLElement | null = null;
  timeline: HTMLElement | null = null;

  constructor(props) {
    super(props);
    this.landingDiv = null;
    this.title = null;
    this.nav = null;
    this.navbar = null;
    this.svg = null;
    this.timeline = null;
  }

  componentDidMount() {
    this.title = document.getElementById('gradIssueH1');
    this.nav = document.getElementById('nav');
    this.navbar = document.getElementById('navbar');
    this.landingDiv = document.getElementById('landingDiv');
    this.svg = document.getElementById('landingSvg');
    this.timeline = document.getElementById('explainer-text');

    if (window.innerWidth > 1010) {
      console.log('calling handle scroll');
      document.addEventListener('DOMContentLoaded', () =>
        document.addEventListener('scroll', e => this.handleScroll(e))
      );
    } else {
      document.addEventListener('DOMContentLoaded', () =>
        document.addEventListener('scroll', e => this.handleScrollMobile(e))
      );
    }
  }

  componentWillUnmount() {
    if (window.innerWidth > 1010) {
      window.removeEventListener('scroll', this.handleScroll);
    } else {
      window.removeEventListener('scroll', this.handleScrollMobile);
    }
  }

  handleScroll = event => {
    let s = window.scrollY;
    console.log(s);
    // 230 start
    // 430 end
    // 9.4/1 = 9.4
    // 9.4/3.13 = 3
    // 9.4/(x) = fontSize vw
    // x = 0.01067*s - 1.453
    if (s < 10) {
      this.landingDiv!.style.height = '100vh';
      this.navbar!.style.height = 'auto';
      this.landingDiv!.classList.remove('landingDivPost');
      this.timeline!.style.marginTop = '100vh';
    } else if (s > 10 && s < 330) {
      let v = -0.2813 * s + 102.8;
      this.landingDiv!.style.height = v + 'vh';
      this.navbar!.style.height = v + 'vh';
      // 100 --> 10vh
      let f = -0.0625 * s + 100.6;
      //timeline.style.marginTop = f + 'vh';

      let w = -0.3226 * s + 6.452;
      this.svg!.style.transform = 'translateY(' + w + '%)';
      if (w < -72) {
        this.svg!.style.display = 'none';
      } else {
        this.svg!.style.display = 'block';
      }
      // 0 --> -100%

      let x = -0.02 * s + 9.6;
      this.title!.style.fontSize = x + 'vw';
      // 9.4 --> 3vw

      let y = 0.1906 * s - 2.906;
      this.title!.style.marginRight = y + '%';
      // -1 --> 60%

      let z = 0.0009375 * s - 0.009375;
      this.title!.style.marginTop = z + 'em';
      // 0 --> 0.3em

      this.landingDiv!.style.justifyContent = 'center';
    } else if (s >= 330) {
      // navbar.style.height = '10vh';
      this.svg!.style.display = 'none';
      this.landingDiv!.style.height = '15vh';
      this.landingDiv!.style.zIndex = '2';
      this.landingDiv!.style.justifyContent = 'flex-start';
      // landingDiv.style.background = 'inherit';
      this.title!.style.fontSize = '3vw';
      this.title!.style.marginRight = '60%';
      this.title!.style.marginTop = '0.3em';
      this.nav!.style.paddingTop = '0.3em';
      this.timeline!.style.marginTop = '90vh';
      this.landingDiv!.classList.add('landingDivPost');
    }
  };

  handleScrollMobile = event => {
    let s = window.scrollY;
    if (s > 570) {
      this.nav!.style.display = 'none';
      this.landingDiv!.style.justifyContent = 'flex-start';
      this.navbar!.style.width = '100%';
      this.navbar!.style.textAlign = 'center';
      this.navbar!.style.padding = '0.5em 0';
      this.navbar!.style.zIndex = '3';
      this.navbar!.style.backgroundImage = 'inherit';
      this.navbar!.style.position = 'fixed';
      this.landingDiv!.classList.add('landingDivPost');
    } else {
      this.nav!.style.display = 'flex';
      this.landingDiv!.style.justifyContent = 'center';
      this.navbar!.style.backgroundImage = 'initial';
      this.navbar!.style.position = 'static';
      this.navbar!.style.width = '90%';
      this.navbar!.style.textAlign = 'right';
      this.landingDiv!.classList.remove('landingDivPost');
    }
  };

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
