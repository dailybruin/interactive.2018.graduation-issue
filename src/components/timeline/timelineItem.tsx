import * as React from 'react';
import glamorous, {ThemeProvider} from 'glamorous';
import './timelineItem.css';
import { Figure, Figcaption, H1 } from 'glamorous';
import TimelineCaption from './timelineCaption';

interface ItemProps {
    headline?: string,
    imgSrc: string,
    song?: string,
    artist?: string,
    borderColor: string
}

class TimelineItem extends React.Component<ItemProps, {}> {
    props: any;
    constructor(props: any) {
        super(props);
    }

    render(): JSX.Element {
        let border = '3px solid ' + `${this.props.borderColor}`;
        return (
            <div className='timelineItem'>
                <H1
                    color={this.props.borderColor}
                    className="timelineH1">
                    {this.props.headline}
                </H1>
                <Figure 
                    border={border}
                    backgroundColor='rgba(242, 242, 242, 0.17)'>
                    <img src={this.props.imgSrc}/>
                    <Figcaption>
                        <TimelineCaption 
                            song={this.props.song} 
                            artist={this.props.artist} 
                            author={this.props.author} 
                            credits={this.props.credits}/>
                    </Figcaption>
                </Figure>
            </div>
        );
    }
}

export default TimelineItem;