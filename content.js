document.addEventListener('DOMContentLoaded', () => {
    chrome.runtime.sendMessage({ action: "playAudio" });
});