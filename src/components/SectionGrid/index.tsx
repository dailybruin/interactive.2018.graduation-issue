import * as React from 'react';
import { Div } from 'glamorous';

interface Story {
  title: string;
  author: string;
  description: string;
  image: string;
  'image-alt': string;
  link: string;
  section: string;
}

interface SectionGridState {
  sections: any[];
  stories: Story[];
}

class SectionGrid extends React.Component<{}, SectionGridState> {
  constructor(props) {
    super(props);
    this.state = { sections: [], stories: [] };
  }

  async componentDidMount() {
    const response = await fetch(
      'http://gsx2json.com/api?id=1Az0eOzoCoT1hpWxSF1kCH0Rrb1BUR-4tXNgCksbO1Iw'
    );
    const data = await response.json();
    console.log(data);
    const sections = data.columns.section.filter(
      (elem, pos, arr) => arr.indexOf(elem) == pos
    );
    console.log(data.rows);
    this.setState({ sections, stories: data.rows });
  }

  // console.log(data);

  render() {
    if (this.state.stories) {
      console.log(this.state.stories);
    }

    const sections = this.state.sections.map(section => {
      const stories = this.state.stories
        .filter(story => story.section === section)
        .map(story => <span>{story.title}</span>);
      return (
        <div>
          <h2>{section}</h2>
          <Div
            display="grid"
            grid-template-columns="repeat(auto-fill, minmax(250px, 1fr))"
            grid-gap="30px"
          >
            {stories}
          </Div>
        </div>
      );
    });

    return <Div width="700px">{sections}</Div>;
  }
}

export default SectionGrid;
