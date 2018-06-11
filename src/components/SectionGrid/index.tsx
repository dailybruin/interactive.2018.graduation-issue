import * as React from 'react';
import StoryCard from './StoryCard/index';
import ThirtyCard from './ThirtyCard/index';
import ThirtyText from './ThirtyText/ThirtyText';

import './section-grid.scss';

export default function SectionGrid({ sections, stories }) {
  if (sections.length > 0 && stories.length > 0) {
    const sectionsJSX = sections.map(section => {
      const storiesJSX = stories
        .filter(story => story.section === section)
        .map(story => {
          if (section === '-30-') {
            return <ThirtyCard story={story} />;
          }
          return <StoryCard story={story} />;
        });

      return (
        <div id={section}>
          <h2 className="section-heading">{section}</h2>
          {section === '-30-' ? (
            <>
              <ThirtyText />
              <div className="thirty-grid">{storiesJSX}</div>
            </>
          ) : (
            <div className="section-grid">{storiesJSX}</div>
          )}
        </div>
      );
    });

    return (
      <div className="sections">
        <h1 className="section-heading">today</h1>
        {sectionsJSX}
      </div>
    );
  }
  return <h1>Loading...</h1>;
}
