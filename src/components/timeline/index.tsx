import * as React from 'react';
import YearMarker from './YearMarker';
import { default as TimelineItem, TimelineItemType } from './TimelineItem';
import './timeline.scss';

interface TimelineState {
  data: any;
}

class Timeline extends React.Component<{}, TimelineState> {
  scrolling: boolean;
  timelines: any;
  items: any;
  arms: any;
  boxes: any;
  offset: number;

  constructor(props) {
    super(props);
    this.scrolling = false;
    this.timelines = undefined;
    this.items = undefined;
    this.arms = undefined;
    this.boxes = undefined;
    this.offset = 0.8;
    this.state = { data: [] };
  }

  async componentWillMount() {
    const response = await fetch(
      'https://kerckhoff.dailybruin.com/api/packages/flatpages/interactive.2018.gradissue/'
    );
    const data = await response.json();
    let aml = data.data['data.aml'];
    const images = data.images;

    for (let i = 0; i < aml.years.length; i += 1) {
      aml.years[i].content.map((item, j) => {
        const img = images.s3[item.image];
        if (img) {
          aml.years[i].content[j].image = img.url;
        }
      });
    }

    this.setState({
      data: aml.years,
    });
  }

  componentDidMount() {
    this.init();
    window.addEventListener('scroll', e => {
      if (!this.scrolling) {
        this.scrolling = true;
        !window.requestAnimationFrame
          ? setTimeout(() => this.checkTimelineScroll, 250)
          : window.requestAnimationFrame(() => this.checkTimelineScroll());
      }
    });
  }

  init() {
    // this.timelines = document.getElementById('timeline');
    this.items = document.getElementsByClassName('timeline-item');
    this.arms = document.getElementsByClassName('timeline-arm');
    this.boxes = document.getElementsByClassName('timeline-box');
    this.hideBlocks();
  }

  checkTimelineScroll() {
    this.showBlocks();
    this.scrolling = false;
  }

  showBlocks() {
    // if (!'classList' in document.documentElement) {
    //   return;
    // }
    for (var i = 0; i < this.items.length; i++) {
      if (
        this.items[i].classList.contains('hidden') &&
        this.items[i].getBoundingClientRect().top <=
          window.innerHeight * this.offset
      ) {
        // add bounce-in animation
        this.arms[i].classList.add('timeline-box--bounce-in');
        this.boxes[i].classList.add('timeline-box--bounce-in');
        this.items[i].classList.remove('hidden');
      }
    }
  }

  hideBlocks() {
    //hide timeline blocks which are outside the viewport
    // if (!'classList' in document.documentElement) {
    //   return;
    // }
    for (let i = 0; i < this.items.length; i++) {
      if (
        this.items[i].getBoundingClientRect().top >
        window.innerHeight * this.offset
      ) {
        this.items[i].classList.add('hidden');
      }
    }
  }

  render() {
    if (this.state.data.length === 0) {
      return <div id="timeline">Loading...</div>;
    } else {
      const events = this.state.data.map(year =>
        year.content.map(story => (
          <TimelineItem
            type={TimelineItemType.Article}
            date={story.date}
            image={story.image}
            author={story.author}
            link={story.link}
            headline={story.headline}
          />
        ))
      );

      return (
        <div id="timeline">
          <YearMarker year="2014" />
          <div className="timeline-stem">{events[0]}</div>
          <YearMarker year="2015" />
          <div className="timeline-stem">{events[1]}</div>
          <YearMarker year="2016" />
          <div className="timeline-stem">{events[2]}</div>
          <YearMarker year="2017" />
          <div className="timeline-stem">{events[3]}</div>
          <YearMarker year="2018" />
          <div className="timeline-stem">{events[4]}</div>
        </div>
      );
    }
  }
}

export default Timeline;
