import * as React from 'react';
import LandingPage from '@/components/LandingPage';
// import YearMarker from '@/components/YearMarker';
// import Timeline from '@/components/Timeline';
import SectionGrid from '@/components/SectionGrid';
import ExplainerText from '@/components/ExplainerText';
import NavigationBar from '@/components/NavigationBar';
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
    const response = await fetch(
      'http://gsx2json.com/api?id=1ui_z_itOJ1R0wWjL4lY8zj8eAfJusxVN4TSzyJ3MlCg'
    );
    const data = await response.json();
    const sections = data.columns.section.filter(
      (elem, pos, arr) => arr.indexOf(elem) == pos
    );

    this.setState({ sections, stories: data.rows });
  }

  render() {
    return (
      <div id="App">
        <LandingPage />
        <ExplainerText />
        <NavigationBar sections={this.state.sections} />
        {/* <div id="t2014">
          <YearMarker year="2014" />
          <Timeline />
        </div> */}
        <SectionGrid
          sections={this.state.sections}
          stories={this.state.stories}
        />
      </div>
    );
  }
}

export default App;
