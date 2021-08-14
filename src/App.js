/* global chrome */

import React from "react";
import "./App.css";
import Button from "./Button";
import Report from "./Report";
import { getCurrentTab } from "./Utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showReport: false,
    };
    this.toggleReport = this.toggleReport.bind(this);
  }

  async componentDidMount() {
    getCurrentTab((tab) => {
      chrome.runtime.sendMessage(
        { type: "toggleReport", tabId: tab.id },
        (response) => {
          if (response) {
            this.setState({
              showReport: Object.assign(this.state.showReport, response),
            });
          }
        }
      );
    });
  }

  toggleReport = (showReport) => {
    this.setState({ showReport: showReport });
  };

  render() {
    console.log("showReport: ", this.state.showReport);
    return (
      <div>
        {this.state.showReport ? (
          <Report />
        ) : (
          <div className="App">
            <img
              src="./sprout-logo-small.png"
              className="App-logo"
              alt="logo"
            />
            <h1>Welcome To EcoMate</h1>
            <Button
              toggleReport={this.toggleReport}
              showReport={this.state.showReport}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
