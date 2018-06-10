import * as React from 'react';
import { Div } from 'glamorous';
import { Story } from '@/components/App';

export default function SectionGrid({ sections, stories }) {
  if (sections.length > 0 && stories.length > 0) {
    console.log(sections);
    const sectionsJSX = sections.map(section => {
      const storiesJSX = stories
        .filter(story => story.section === section)
        .map(story => (
          <a href={story.link}>
            <article>
              <figure>
                <img src={story.imageurl} alt={story.imagedescription} />
                <figcaption>{story.imagecredits}</figcaption>
              </figure>
              <h1>{story.headline}</h1>
              <span>{story.author}</span>
            </article>
          </a>
        ));
      return (
        <div id={section}>
          <h2>{section}</h2>
          {section === '-30-' && (
            <div>
              Back in the day, newspaper publications would send their pieces
              via telegraph. To signify the end of a telegram, publications
              would use character sequences such as “-30-.” Those times have
              changed, but student publications like the Daily Bruin continue to
              provide for their campuses and serve as a place for students to
              call home. Read these graduating staffers’ personal columns, where
              they share their final messages before leaving The Bruin.
            </div>
          )}
          <Div
            display="grid"
            grid-template-columns="repeat(auto-fill, minmax(250px, 1fr))"
            grid-gap="30px"
          >
            {storiesJSX}
          </Div>
        </div>
      );
    });

    return <Div width="100vw">{sectionsJSX}</Div>;
  }
  return <h1>Loading...</h1>;
}
