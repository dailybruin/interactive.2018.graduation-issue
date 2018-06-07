import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Timeline from '@/components/timeline/timeline';

import glamorous, {ThemeProvider} from 'glamorous';
import './index.css';

import { H1 } from 'glamorous';
import YearMarker from '@/components/yearMarkers/yearMarker';

class App extends React.Component<{}, {}> {
    render() {
        return (
            <div id="App">
                <H1
                    id="gradIssueH1">
                    graduation issue
                </H1>
                <YearMarker year='2014' />
                <Timeline />
            </div>
        )
    }
};

ReactDOM.render(<App />, document.getElementById('root'));

//Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
