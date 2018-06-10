import * as React from 'react';
import './timelineBlock.css';
import TimelineBlock from './timelineBlock';

interface TimelineProps {
  scrolling: boolean;
  vt: any;
  blocks: any;
  arms: any;
  items: any;
  offset: number;
}

class Timeline extends React.Component<{}, {}> {
  scrolling: boolean;
  vt: any;
  blocks: any;
  arms: any;
  items: any;
  offset: number;

  constructor(props) {
    super(props);
    this.scrolling = false;
    this.vt = null;
    this.blocks = null;
    this.arms = null;
    this.items = null;
    this.offset = 0.8;
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
    this.vt = document.getElementById('timeline');
    console.log(this.vt);
    this.blocks = document.getElementsByClassName('timelineBlock');
    console.log(this.blocks);
    this.arms = document.getElementsByClassName('timelineArm');
    this.items = document.getElementsByClassName('timelineItem');
    this.hideBlocks();
  }

  checkTimelineScroll() {
    this.showBlocks();
    this.scrolling = false;
  }

  showBlocks() {
    if (!'classList' in document.documentElement) {
      return;
    }
    for (var i = 0; i < this.blocks.length; i++) {
      if (
        this.items[i].classList.contains('hidden') &&
        this.blocks[i].getBoundingClientRect().top <=
          window.innerHeight * this.offset
      ) {
        // add bounce-in animation
        this.arms[i].classList.add('timelineItem--bounce-in');
        this.items[i].classList.add('timelineItem--bounce-in');
        this.arms[i].classList.remove('hidden');
        this.items[i].classList.remove('hidden');
      }
    }
  }

  hideBlocks() {
    //hide timeline blocks which are outside the viewport
    if (!'classList' in document.documentElement) {
      return;
    }
    for (var i = 0; i < this.blocks.length; i++) {
      if (
        this.blocks[i].getBoundingClientRect().top >
        window.innerHeight * this.offset
      ) {
        this.arms[i].classList.add('hidden');
        this.items[i].classList.add('hidden');
      }
    }
  }

  render() {
    return (
      <div id="timeline">
        <TimelineBlock
          headline="song of the year"
          date="Sept 2014"
          song="Style"
          artist="Taylor Swift"
          color="#FFFCE1"
          imgSrc="https://is1-ssl.mzstatic.com/image/thumb/Music3/v4/2c/b1/87/2cb187fa-2da2-839e-436a-8997561c0493/UMG_cvrart_00843930013562_01_RGB72_1400x1400_14UMDIM03405.jpg/268x0w.jpg"
        />
        <TimelineBlock
          headline="Beat 'SC Bonfire Cancelled"
          date="Nov 23, 2014"
          author="Ryan Leou and Edward Pedroza"
          credits="Austin Yu"
          color="#FFFCE1"
          imgSrc="http://dailybruin.com/images/2014/11/web.ns_.11.21.bonfire.AYu_.picA_-640x426.jpg"
        />
        <TimelineBlock
          headline="song of the year"
          date="Sept 2014"
          song="Style"
          artist="Taylor Swift"
          color="#FFFCE1"
          imgSrc="https://is1-ssl.mzstatic.com/image/thumb/Music3/v4/2c/b1/87/2cb187fa-2da2-839e-436a-8997561c0493/UMG_cvrart_00843930013562_01_RGB72_1400x1400_14UMDIM03405.jpg/268x0w.jpg"
        />
        <TimelineBlock
          headline="song of the year"
          date="Sept 2014"
          song="Style"
          artist="Taylor Swift"
          color="#FFFCE1"
          imgSrc="https://is1-ssl.mzstatic.com/image/thumb/Music3/v4/2c/b1/87/2cb187fa-2da2-839e-436a-8997561c0493/UMG_cvrart_00843930013562_01_RGB72_1400x1400_14UMDIM03405.jpg/268x0w.jpg"
        />
      </div>
    );
  }
}

export default Timeline;
