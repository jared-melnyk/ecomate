/* global chrome */
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ showReport: false });
});

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  switch (msg.type) {
    case "toggleReport":
      const showReport = chrome.storage.sync.get("showReport");
      response(showReport);
      break;
    default:
      response("unknown request");
      break;
  }
});
