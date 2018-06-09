import * as React from 'react';

export default function SectionGrid(section, stories) {
  const gridItems = stories.map(story => (
    <article>
      <figure>
        <img src={story.image} alt={story.alt} />
        <figcaption>{story.credits}</figcaption>
      </figure>
      <h1>{story.headline}</h1>
      <div>{story.byline}</div>
    </article>
  ));

  return (
    <div>
      <h2>{section}</h2>
      <section>{gridItems}</section>
    </div>
  );
}
