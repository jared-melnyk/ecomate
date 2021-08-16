## REQUIREMENTS

1. Retrieve product information (e.g. name, price, dimensions) from active tab webpage
2. Store product information in client side local storage
3. UI allows user to activate / deactivate extension on a particular page
   3a. MVP - match on certain pages
4. User can access a report of shopping activity for a period of time (e.g. the past 30 days)

## Chrome Extension APIs

chrome.notifications - Use the chrome.notifications API to create rich notifications using templates and show these notifications to users in the system tray.

chrome.pageCapture - save a tab as MHTML for archival

chrome.runtime - Use the chrome.runtime API to retrieve the background page, return details about the manifest, and listen for and respond to events in the app or extension lifecycle. You can also use this API to convert the relative path of URLs to fully-qualified URLs.

chrome.scripting - Use the chrome.scripting API to execute script in different contexts.

chrome.storage - Use the chrome.storage API to store, retrieve, and track changes to user data.

chrome.webRequest - Use the chrome.webRequest API to observe and analyze traffic and to intercept, block, or modify requests in-flight.

chrome.declarativeNetRequest - The chrome.declarativeNetRequest API is used to block or modify network requests by specifying declarative rules. This lets extensions modify network requests without intercepting them and viewing their content, thus providing more privacy.

## Methods

tabs.create or window.open() >> used to display additional HTML files outside the extension pop-up. Use this for the summary report feature.

## REI site map

product name class = .dl*7C8km92zuNzeZlZyS2
product sale price class = .\_2xZVXKL4Bd0pJyQCumYi9P
product regular price class = .Dm_X3ktyv_w_gPWuYlJf*
div surrounding prices class = ._1zwqhlCzOK-xETXwFg_-iZ
li product selector = .pPe0GNuagvmEFURs1Q_vm
