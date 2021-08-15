/* global chrome */

import { getCurrentTab } from "./Utils";

const Button = (props) => {
  const handleClick = async () => {
    const messageType = props.showReport
      ? "unset-show-report"
      : "set-show-report";
    await getCurrentTab((tab) => {
      chrome.runtime.sendMessage(
        { type: messageType, tabId: tab.id },
        (response) => {
          console.log(response);
        }
      );
    });
    setTimeout(() => {
      chrome.tabs.create({
        url: "/index.html",
      });
    }, 200);
  };
  const viewPrefix = props.showReport ? "Close" : "View";
  return (
    <button id="view-report-btn" onClick={handleClick}>
      {viewPrefix} My Report
    </button>
  );
};

export default Button;
