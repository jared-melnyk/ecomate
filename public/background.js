/* global chrome */
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({
    "ecomate-show-report": false,
    "ecomate-order-history": [{ productsList: [] }],
  });
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "get-show-report") {
    console.log("message received: get-show-report");
    retrieveStorage("ecomate-show-report").then((result) => {
      console.log("response sent from get-show-report: ", result);
      sendResponse(result);
    });
  } else if (msg.type === "set-show-report") {
    console.log("message received: set-show-report");
    chrome.storage.sync.set({ "ecomate-show-report": true }, () => {
      sendResponse("showReport set");
    });
  } else if (msg.type === "get-order-history") {
    console.log("message received: get-order-history");
    retrieveStorage("ecomate-order-history").then((result) => {
      console.log("response sent from get-order-history: ", result);
      sendResponse(result);
    });
  } else if (msg.type === "unset-show-report") {
    chrome.storage.sync.set({ "ecomate-show-report": false }, () => {
      sendResponse("showReport un-set");
      getCurrentTab().then((tab) => {
        chrome.tabs.remove(tab.id);
      });
    });
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

chrome.action.onClicked.addListener(() => {
  chrome.runtime.sendMessage();
});

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}
