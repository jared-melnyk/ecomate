/* global chrome */

const Button = (props) => {
  const handleClick = async () => {
    await chrome.storage.sync.set({ showReport: true });
    await chrome.tabs.create({
      url: "/index.html",
    });
  };

  return (
    <button id="view-report-btn" onClick={handleClick}>
      View My EcoMate Report
    </button>
  );
};

export default Button;
