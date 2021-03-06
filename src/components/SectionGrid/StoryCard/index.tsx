import * as React from 'react';
import './story-card.scss';

export default function StoryCard({ story }) {
  return (
    <article className="story-card">
      <a href={story.link}>
        <img src={story.imageurl} alt={story.imagedescription} />
        <h3 className="headline">
          {story.italics ? <em>{story.headline}</em> : story.headline}
        </h3>
        <div className="byline">
          By <span className="author">{story.byline}</span>
        </div>
      </a>
    </article>
  );
}
