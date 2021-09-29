let color = '#3a41a7';

//set event listener on chrome extension
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to blue', `color: ${color}`);
});
