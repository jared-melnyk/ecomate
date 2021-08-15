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
    if (props.showReport) {
    } else {
      setTimeout(() => {
        chrome.tabs.create({
          url: "/index.html",
        });
      }, 200);
    }
  };
  const viewPrefix = props.showReport ? "Close" : "View My";
  return (
    <button id="view-report-btn" onClick={handleClick}>
      {viewPrefix} Report
    </button>
  );
};

export default Button;
