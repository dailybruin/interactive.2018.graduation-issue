import * as React from 'react';

// import box2014 from '@/assets/2014.svg';
// import box2015 from '@/assets/2015.svg';
// import box2016 from '@/assets/2016.svg';
// import box2017 from '@/assets/2017.svg';
// import box2018 from '@/assets';

const boxes = {
  // '2014': require('@/assets/2014.svg'),
  // '2015': box2015,
  // '2016': box2016,
  // '2017': box2017,
  // '2018': box2018,
};

export default function YearMarker({ year }) {
  return <img src={boxes[year]} />;
}
