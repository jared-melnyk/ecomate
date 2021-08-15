/* global chrome */

import { getCurrentTab } from "./Utils";

const Button = (props) => {
  const handleClick = async () => {
    getCurrentTab((tab) => {
      chrome.runtime.sendMessage(
        { type: "set-show-report", tabId: tab.id },
        (response) => {
          console.log(response);
        }
      );
    });

    await chrome.tabs.create({
      url: "/index.html",
    });
  };

  return (
    <button id="view-report-btn" onClick={handleClick}>
      View My EcoMate Report
    </button>
  );
};

export default Button;
