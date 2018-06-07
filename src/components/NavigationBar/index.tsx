import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from '@reach/router';
import glamorous, {ThemeProvider} from 'glamorous';
import './navBar.css';

import { H1 } from 'glamorous';

function NavigationBar() {
    return (
        <div id="navbar">
            <img src="" alt="" />
            <H1
                id="gradIssueH1">
                graduation issue
            </H1>
            <nav id="nav">
                <Link to="">News</Link>
                <Link to="">Sports</Link>
                <Link to="">Arts</Link>
                <Link to="">Opinion</Link>
                <Link to="">Photo</Link>
                <Link to="">Illustrations</Link>
                <Link to="">Graphics</Link>
                <Link to="">Video</Link>
                <Link to="">Prime</Link>
                <Link to="">The Quad</Link>
                <Link to="">-30-</Link>
            </nav>
        </div>
    );
};

export default NavigationBar;