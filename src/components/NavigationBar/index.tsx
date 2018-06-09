import * as React from 'react';
import * as ReactDOM from 'react-dom';
import glamorous, { ThemeProvider } from 'glamorous';
import './navBar.css';

import { H1 } from 'glamorous';

export default function NavigationBar() {
  return (
    <div id="navbar">
      <img src="" alt="" />
      <H1 id="gradIssueH1">graduation issue</H1>
      <nav id="nav">
        <a href="">News</a>
        <a href="">Sports</a>
        <a href="">Arts</a>
        <a href="">Opinion</a>
        <a href="">Photo</a>
        <a href="">Illustrations</a>
        <a href="">Graphics</a>
        <a href="">Video</a>
        <a href="">Prime</a>
        <a href="">The Quad</a>
        <a href="">-30-</a>
      </nav>
    </div>
  );
}
