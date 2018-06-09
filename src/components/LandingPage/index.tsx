import * as React from 'react';
import './landingPage.css';
import NavigationBar from '../NavigationBar';

const LandingSVG = require('../../assets/landing.svg');

function LandingPage() {
  return (
    <div id="landingDiv">
      <img id="landingSvg" src={LandingSVG} alt="" />
      <NavigationBar />
    </div>
  );
}

export default LandingPage;
