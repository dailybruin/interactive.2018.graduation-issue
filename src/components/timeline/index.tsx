import * as React from 'react';
import YearMarker from '@/components/Timeline/YearMarker';
import TimelineItem from './TimelineItem';
import './timeline.css';

class Timeline extends React.Component<{}, {}> {
  // state = {
  //   scrolling = false,
  //   timeline = undefined,
  //   blocks = undefined,
  //   arms = undefined;
  //   items = undefined;
  //   offset = 0.8;
  // }

  // componentDidMount() {
  //   // this.setState({
  //   //   timeline: document.getElementById('timeline'),
  //   //   blocks: document.getElementsByClassName('timelineBlock'),
  //   //   arms: document.getElementsByClassName('timelineArm'),
  //   //   items: document.getElementsByClassName('timelineItem'),
  //   // });
  //   // window.addEventListener('scroll', e => {
  //   //   if (!this.scrolling) {
  //   //     this.scrolling = true;
  //   //     !window.requestAnimationFrame
  //   //       ? setTimeout(() => this.checkTimelineScroll, 250)
  //   //       : window.requestAnimationFrame(() => this.checkTimelineScroll());
  //   //   }
  //   // });
  // }

  // init() {
  //   this.hideBlocks();
  // }

  // checkTimelineScroll() {
  //   this.showBlocks();
  //   this.scrolling = false;
  // }

  // showBlocks() {
  //   if (!'classList' in document.documentElement) {
  //     return;
  //   }
  //   for (var i = 0; i < this.blocks.length; i++) {
  //     if (
  //       this.items[i].classList.contains('hidden') &&
  //       this.blocks[i].getBoundingClientRect().top <=
  //         window.innerHeight * this.offset
  //     ) {
  //       // add bounce-in animation
  //       this.arms[i].classList.add('timelineItem--bounce-in');
  //       this.items[i].classList.add('timelineItem--bounce-in');
  //       this.arms[i].classList.remove('hidden');
  //       this.items[i].classList.remove('hidden');
  //     }
  //   }
  // }

  // hideBlocks() {
  //   //hide timeline blocks which are outside the viewport
  //   if (!'classList' in document.documentElement) {
  //     return;
  //   }
  //   for (var i = 0; i < this.blocks.length; i++) {
  //     if (
  //       this.blocks[i].getBoundingClientRect().top >
  //       window.innerHeight * this.offset
  //     ) {
  //       this.arms[i].classList.add('hidden');
  //       this.items[i].classList.add('hidden');
  //     }
  //   }
  // }

  render() {
    return (
      <div id="timeline">
        <YearMarker year="2014" />
        <div className="timeline-stem">
          <TimelineItem />
        </div>
        <YearMarker year="2015" />
        <div className="timeline-stem">
          <TimelineItem />
        </div>
        <YearMarker year="2016" />
        <div className="timeline-stem">
          <TimelineItem />
        </div>
        <YearMarker year="2017" />
        <div className="timeline-stem">
          <TimelineItem />
        </div>
        <YearMarker year="2018" />
      </div>
    );
  }
}

export default Timeline;
