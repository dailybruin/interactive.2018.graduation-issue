import * as React from 'react';
import LandingPage from '@/components/LandingPage';
import YearMarker from '@/components/YearMarker';
import Timeline from '@/components/Timeline';
import PopUp from '@/components/PopUp';

export default function App() {
  return (
    <div id="App">
      <LandingPage />
      <PopUp type='tuition' date='nov. 21, 2014' raise='23'/> 
      <div id="t2014">
        <YearMarker year="2014" />
        <Timeline />
      </div>
    </div>
  );
}
