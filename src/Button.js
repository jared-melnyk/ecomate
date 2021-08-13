/* global chrome */
import { useEffect } from "react";

const Button = () => {
  useEffect(() => {
    let myReport = document.getElementById("myReport");

    myReport.addEventListener("click", async () => {
      await chrome.tabs.create({
        url: "/index.html",
      });
    });
    console.log("mount it!");
  }, []);
  return <button id="myReport">View My EcoMate Report</button>;
};

export default Button;
