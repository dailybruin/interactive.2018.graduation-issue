import * as React from 'react';
import * as ReactDOM from 'react-dom';

import glamorous, {ThemeProvider} from 'glamorous';
import './timelineBlock.css';
import { } from 'glamorous';
import TimelineBlock from './timelineBlock';

class Timeline extends React.Component<{}, {}> {
    render() {
        return (
            <div id="timeline">
                <TimelineBlock color='#FFFCE1'/>
                <TimelineBlock color='#FFFCE1'/>
            </div>
        )
    }
};

export default Timeline;