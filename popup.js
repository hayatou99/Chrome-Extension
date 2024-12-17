document.getElementById('enableHighlighting').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: highlightSale
    });
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: highlightPopularity
    });
  });
});

document.getElementById('disableHighlighting').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: clearHighlights
    });
  });
});

function clearHighlights() {
  const highlightedElements = document.querySelectorAll('span[style="background-color: yellow; color: red;"]');
  highlightedElements.forEach(el => {
    el.style.backgroundColor = '';
    el.style.color = '';
  });
}
