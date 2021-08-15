/* global chrome */

import { getCurrentTab } from "./Utils";
import Button from "@material-ui/core/Button";

const MyButton = (props) => {
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
    <Button
      className="my-button"
      onClick={handleClick}
      variant="contained"
      color="primary"
    >
      {viewPrefix} Report
    </Button>
  );
};

export default MyButton;
