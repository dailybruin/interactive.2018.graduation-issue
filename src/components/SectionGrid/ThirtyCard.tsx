import * as React from 'react';
// import './story-card.css';

export default function ThirtyCard({ story }) {
  return (
    <article className="story-card thirty-card">
      <a href={story.link}>
        <img src={story.imageurl} alt={story.imagedescription} />
        <h3 className="headline">{story.byline}</h3>
      </a>
    </article>
  );
}
