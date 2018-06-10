import * as React from 'react';
import StoryCard from './StoryCard';
import ThirtyText from './ThirtyText';

import './section-grid.css';

export default function SectionGrid({ sections, stories }) {
  if (sections.length > 0 && stories.length > 0) {
    const sectionsJSX = sections.map(section => {
      const storiesJSX = stories
        .filter(story => story.section === section)
        .map(story => <StoryCard story={story} />);
      return (
        <div id={section}>
          <h2 className="section-heading">{section}</h2>
          {section === '-30-' && <ThirtyText />}
          <div className="section-grid">{storiesJSX}</div>
        </div>
      );
    });

    return <div className="sections">{sectionsJSX}</div>;
  }
  return <h1>Loading...</h1>;
}
