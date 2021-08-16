/*global chrome*/
export function getCurrentTab(callback) {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    (tabs) => {
      callback(tabs[0]);
    }
  );
}

export const displayPrice = (price) => {
  let cents;
  let dollars;
  console.log("price string: ", String(price));
  console.log("string search result: ", String(price).indexOf("."));

  if (String(price).indexOf(".") === -1) {
    cents = "00";
    dollars = price;
  } else {
    cents = String(price).slice(String(price).length - 2);
    dollars = String(price).slice(0, String(price).length - 2);
  }
  return `${dollars}.${cents}`;
};
