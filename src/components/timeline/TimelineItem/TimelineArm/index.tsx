import * as React from 'react';
import { TimelineItemType } from '../index';
import './timeline-arm.scss';

interface TimelineArmProps {
  type: TimelineItemType;
  date: string;
  color: string;
}

class TimelineArm extends React.Component<TimelineArmProps, {}> {
  getClassNameForType = () => {
    switch (this.props.type) {
      case TimelineItemType.Article:
        return 'timeline-arm-date__article';
      case TimelineItemType.Song:
        return 'timeline-arm-date__song';
      case TimelineItemType.Movie:
        return 'timeline-arm-date__movie';
    }
  };

  render() {
    return (
      <div className="timeline-arm">
        <span className={`timeline-arm__date ${this.getClassNameForType()}`}>
          {this.props.date}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="262"
          height="32"
          viewBox="0 0 262 32"
          fill="none"
        >
          <ellipse
            cx="15.5"
            cy="15.7067"
            rx="15.5"
            ry="15.7067"
            transform="translate(231)"
            fill={this.props.color}
          />
          <line
            y1="-6"
            x2="220"
            y2="-6"
            transform="translate(26 23)"
            stroke={this.props.color}
            strokeWidth="12"
          />
          <path
            d="M27.5 15.7067C27.5 22.4921 22.0839 27.9133 15.5 27.9133C8.91614 27.9133 3.5 22.4921 3.5 15.7067C3.5 8.92126 8.91614 3.5 15.5 3.5C22.0839 3.5 27.5 8.92126 27.5 15.7067Z"
            transform="translate(0 0.306641)"
            stroke={this.props.color}
            strokeWidth="7"
          />
        </svg>
      </div>
    );
  }
}

export default TimelineArm;
