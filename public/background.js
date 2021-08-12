/* global chrome */
let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("Default background color set to %cgreen", `color: ${color}`);
});

// chrome.scripting.registerContentScript({
//   id: 1,
//   matches: ["http://*.nytimes.com/*"],
//   exclude_matches: ["*://*/*business*"],
//   js: ["contentScript.js"],
// });
