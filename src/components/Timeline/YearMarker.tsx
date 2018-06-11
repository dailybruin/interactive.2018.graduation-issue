import * as React from 'react';

const boxes = {
  '2014': require('../../assets/2014.svg'),
  '2015': require('../../assets/2015.svg'),
  '2016': require('../../assets/2016.svg'),
  '2017': require('../../assets/2017.svg'),
  '2018': require('../../assets/2018.svg'),
};

export default function YearMarker({ year }) {
  return <img src={boxes[year]} />;
}
