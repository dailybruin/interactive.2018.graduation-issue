import * as React from 'react';
import { TimelineItemType } from '../index';
import './timeline-box.scss';

interface TimelineBoxProps {
  type: TimelineItemType;
  headline?: string;
  author?: string;
  image: string;
  media?: string;
}

class TimelineBox extends React.Component<TimelineBoxProps, {}> {
  getClassNameForType = () => {
    switch (this.props.type) {
      case TimelineItemType.Article:
        return 'timeline-box__article';
      case TimelineItemType.Song:
        return 'timeline-box__song';
      case TimelineItemType.Movie:
        return 'timeline-box__movie';
    }
  };

  renderCaption = () => {
    switch (this.props.type) {
      case TimelineItemType.Article:
        return (
          <div className="box-caption box-caption__articlebyline byline">
            <h2>
              By <span className="author">{this.props.author}</span>
            </h2>
          </div>
        );
      case TimelineItemType.Movie:
      case TimelineItemType.Song:
        return (
          <div className="box-caption box-caption__media">
            <h2>{this.props.media}</h2>
            {this.props.author}
          </div>
        );
    }
  };

  getHeadline = () => {
    switch (this.props.type) {
      case TimelineItemType.Article:
        return this.props.headline;
      case TimelineItemType.Song:
        return 'Billboard Top Song';
      case TimelineItemType.Movie:
        return 'Box Office Hit';
    }
  };

  render() {
    return (
      <div className={`timeline-box ${this.getClassNameForType()}`}>
        <h1>{this.getHeadline()}</h1>
        <figure>
          <img src={this.props.image} />
          <figcaption>{this.renderCaption()}</figcaption>
        </figure>
      </div>
    );
  }
}

export default TimelineBox;
