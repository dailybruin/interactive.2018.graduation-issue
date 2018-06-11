import * as React from 'react';
import LandingPage from '@/components/LandingPage';
import Timeline from '@/components/Timeline';
import SectionGrid from '@/components/SectionGrid';
import ExplainerText from '@/components/ExplainerText';
import Footer from '@/components/Footer';

const data = require('../api.json');

export interface Story {
  title: string;
  author: string;
  description: string;
  image: string;
  imagealt: string;
  link: string;
  section: string;
}
interface AppState {
  sections: any[];
  stories: Story[];
}
class App extends React.Component<{}, AppState> {
  constructor(props) {
    super(props);
    this.state = { sections: [], stories: [] };
  }

  async componentWillMount() {
    // const response = await fetch(
    //   'http://gsx2json.com/api?id=1ui_z_itOJ1R0wWjL4lY8zj8eAfJusxVN4TSzyJ3MlCg'
    // );
    // const data = await response.json();
    const sections = data.columns.section.filter(
      (elem, pos, arr) => arr.indexOf(elem) == pos
    );

    this.setState({ sections, stories: data.rows });
  }

  render() {
    return (
      <div id="App">
        <LandingPage sections={this.state.sections} />
        <ExplainerText />
        <Timeline />
        <SectionGrid
          sections={this.state.sections}
          stories={this.state.stories}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
