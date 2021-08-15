/* global chrome */
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ "ecomate-show-report": false });
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  let data;
  if (msg.type === "get-show-report") {
    console.log("message received: get-show-report");
    retrieveStorage("ecomate-show-report").then((result) => {
      console.log("response sent from get-show-report: ", result);
      sendResponse(result);
    });
  } else if (msg.type === "set-show-report") {
    console.log("message received: set-show-report");
    chrome.storage.sync.set({ "ecomate-show-report": true });
    sendResponse("set show-report success");
  } else if (msg.type === "get-user-order") {
    data = retrieveStorage("ecomate-order");
    console.log("message received: get-user-order");
    sendResponse(data);
  } else {
    console.log("busted into default onMessage response");
    sendResponse("unknown request");
    return true;
  }
  return true;
});

async function retrieveStorage(key) {
  return new Promise((resolve, reject) => {
    try {
      chrome.storage.sync.get(key, function (value) {
        resolve(value[key]);
      });
    } catch (e) {
      reject(e);
    }
  });
}
