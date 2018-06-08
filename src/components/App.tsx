import * as React from 'react';
import LandingPage from '@/components/LandingPage';
import YearMarker from '@/components/YearMarker';
import Timeline from '@/components/Timeline';

export default function App() {
  return (
    <div id="App">
      <LandingPage />
      <div id="t2014">
        <YearMarker year="2014" />
        <Timeline />
      </div>
    </div>
  );
}
