/* global chrome */

import { getCurrentTab } from "./Utils";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    margin: 15,
    backgroundColor: "#A7C957",
    color: "#386641",
  },
});

const MyButton = (props) => {
  const { classes } = props;
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
  const viewPrefix = props.showReport ? "Close" : "View";
  return (
    <Button
      className={classes.root}
      onClick={handleClick}
      variant={"contained"}
    >
      {viewPrefix} Report
    </Button>
  );
};

export default withStyles(styles)(MyButton);
