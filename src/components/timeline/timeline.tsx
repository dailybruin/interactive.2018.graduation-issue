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
                <TimelineBlock headline='song of the year' song='Style' artist= 'Taylor Swift' color='#FFFCE1' imgSrc='https://is1-ssl.mzstatic.com/image/thumb/Music3/v4/2c/b1/87/2cb187fa-2da2-839e-436a-8997561c0493/UMG_cvrart_00843930013562_01_RGB72_1400x1400_14UMDIM03405.jpg/268x0w.jpg'/>
                <TimelineBlock headline="Beat 'SC Bonfire Cancelled" author='Ryan Leou' credits='Austin Yu' color='#FFFCE1' imgSrc='http://dailybruin.com/images/2014/11/web.ns_.11.21.bonfire.AYu_.picA_-640x426.jpg'/>
                <TimelineBlock headline='song of the year' song='Style' artist= 'Taylor Swift' color='#FFFCE1' imgSrc='https://is1-ssl.mzstatic.com/image/thumb/Music3/v4/2c/b1/87/2cb187fa-2da2-839e-436a-8997561c0493/UMG_cvrart_00843930013562_01_RGB72_1400x1400_14UMDIM03405.jpg/268x0w.jpg'/>
                <TimelineBlock headline='song of the year' song='Style' artist= 'Taylor Swift' color='#FFFCE1' imgSrc='https://is1-ssl.mzstatic.com/image/thumb/Music3/v4/2c/b1/87/2cb187fa-2da2-839e-436a-8997561c0493/UMG_cvrart_00843930013562_01_RGB72_1400x1400_14UMDIM03405.jpg/268x0w.jpg'/>
            </div>
        )
    }
};

export default Timeline;