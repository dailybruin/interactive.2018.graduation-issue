import * as React from 'react';

class TimelineCaption extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
    this.renderArticle = this.renderArticle.bind(this);
    this.renderSong = this.renderSong.bind(this);
    this.renderMovie = this.renderMovie.bind(this);
  }

  private renderArticle(): JSX.Element {
    return (
      <div className="articleItem itemCaption">
        <h2>By {this.props.author}</h2>
      </div>
    );
  }

  private renderSong(): JSX.Element {
    return (
      <div className="songItem itemCaption">
        <h2>{this.props.song}</h2>
        {this.props.artist}
      </div>
    );
  }

  private renderMovie(): void { }

  render(): any {
    if (this.props.song) {
      return this.renderSong();
    } else if (this.props.author) {
      return this.renderArticle();
    } else if (this.props.movieTitle) {
      return this.renderMovie();
    }
  }
}

export default TimelineCaption;
