import * as React from 'react';
import './timelineBlock.css';
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
        <TimelineArm color={this.props.color} date={this.props.date} />
        <TimelineItem
          borderColor={this.props.color}
          headline={this.props.headline}
          song={this.props.song}
          artist={this.props.artist}
          author={this.props.author}
          imgSrc={this.props.imgSrc}
        />
      </div>
    );
  }
}

export default TimelineBlock;
