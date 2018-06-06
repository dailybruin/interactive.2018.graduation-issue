import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SectionGrid from './components/SectionGrid';

const stories = [];

ReactDOM.render(
  <SectionGrid section="News" stories={stories} />,
  document.getElementById('root')
);

//Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
