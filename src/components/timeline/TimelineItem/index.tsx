import * as React from 'react';
import TimelineArm from './TimelineArm';
import TimelineBox from '@/components/Timeline/TimelineItem/TimelineBox';
import './timeline-item.scss';

export enum TimelineItemType {
  Article = 'article',
  Movie = 'movie',
  Song = 'song',
}

interface TimelineItemProps {
  type: TimelineItemType;
  date: string;
  image: string;
  link: string;
  headline?: string;
  media?: string;
  author: string;
}

export default class TimelineItem extends React.Component<
  TimelineItemProps,
  {}
> {
  getColor = () => {
    switch (this.props.type) {
      case TimelineItemType.Article:
        return '#DFF3FE';
      case TimelineItemType.Song:
        return '#FFFCE1';
      case TimelineItemType.Movie:
        return '#F8E2CE';
    }
  };

  render() {
    return (
      <div className="timeline-item hidden">
        <TimelineArm
          color={this.getColor()}
          date={this.props.date}
          type={this.props.type}
        />
        <a href={this.props.link}>
          <TimelineBox
            type={this.props.type}
            image={this.props.image}
            headline={this.props.headline}
            media={this.props.media}
            author={this.props.author}
          />
        </a>
      </div>
    );
  }
}
