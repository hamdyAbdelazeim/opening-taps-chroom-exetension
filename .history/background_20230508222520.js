chrome.windows.onCreated.addListener(function (window) {
  chrome.tabs.create({ url: 'https://www.linkedin.com/feed/' })
  chrome.tabs.create({ url: 'https://www.google.com' })
  chrome.tabs.create({ url: 'https://www.github.com' })
})
