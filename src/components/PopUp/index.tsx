import * as React from "react";
import * as ReactDOM from "react-dom";

import glamorous, { ThemeProvider } from "glamorous";
import "./popup.css";
import { Div } from "glamorous";

interface PopUpProps {
  type: string;
  raise?: string;
  award?: string;
  date: string;
  sport?: string;
}

class PopUp extends React.Component<PopUpProps, {}> {
  renderIcon() {
    switch (this.props.type) {
      case "tuition":
        return (
          <svg
            width="auto"
            height="100%"
            viewBox="0 0 415 332"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="8"
              fill="none"
              fillRule="evenodd"
            >
              <path
                d="M433.202845,34.9029289 L306.101363,46.6124179 C325.718218,68.0934607 337.193313,80.4673154 340.526646,83.7339821 L211.258101,193.429787 L135.121801,103.281512 C30.1409324,232.933954 -22.3495017,297.760175 -22.3495017,297.760175 C-22.3495017,297.760175 29.3616205,256.29694 132.783865,173.370469 L210.934849,267.190525 L381.746278,127.326895 L416.947157,164.328649 L433.202845,34.9029289 Z"
                id="Shape"
                stroke="#000000"
                fillRule="nonzero"
                transform="translate(205.426672, 166.331552) rotate(-9.000000) translate(-205.426672, -166.331552) "
              />
            </g>
          </svg>
        );
      case "champion":
        return <svg />;
    }
  }

  renderTitle() {
    switch (this.props.type) {
      case "tuition":
        return "Tuition ↑ " + this.props.raise + "%";
      case "champion":
        return "NCAA Championship Win!";
    }
  }

  renderSubtitle() {
    switch (this.props.type) {
      case "tuition":
        return this.props.date;
      case "champion":
        return this.props.sport + " - " + this.props.date;
    }
  }

  render() {
    return (
      <div id="recapPop">
        {this.renderIcon()}
        <div id="recapText">
          <div id="recapTitle">{this.renderTitle()}</div>
          <div id="recapDesc">{this.renderSubtitle()}</div>
        </div>
      </div>
    );
  }
}

export default PopUp;
