import * as React from 'react';
import glamorous, {ThemeProvider} from 'glamorous';
import './timelineBlock.css';
//import { } from 'glamorous';
import TimelineArm from './timelineArm';
import TimelineItem from './timelineItem';

class TimelineBlock extends React.Component<{}, {}> {
    props: any;
    constructor(props: any) {
        super(props);
    }

    render(): JSX.Element {
        return (
            // arm of timeline
            <div className="timelineBlock">
                <TimelineArm color={this.props.color} date="Sept 2014"/>
                <TimelineItem borderColor={this.props.color} headline='song of the year' song='Style' artist='Taylor Swift' imgSrc='https://is1-ssl.mzstatic.com/image/thumb/Music3/v4/2c/b1/87/2cb187fa-2da2-839e-436a-8997561c0493/UMG_cvrart_00843930013562_01_RGB72_1400x1400_14UMDIM03405.jpg/268x0w.jpg' />
            </div>
        );
    }
}

export default TimelineBlock;