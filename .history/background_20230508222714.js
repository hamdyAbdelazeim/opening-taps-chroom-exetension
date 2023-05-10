chrome.windows.onCreated.addListener(function (window) {
  chrome.tabs.create({ url: 'https://www.linkedin.com/feed/' })
  chrome.tabs.create({
    url: 'https://timesprayer.com/prayer-times-in-cairo.html',
  })
  chrome.tabs.create({ url: 'https://mail.google.com/mail/u/0/#inbox' })
})
