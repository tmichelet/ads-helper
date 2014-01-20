var script = document.createElement('script');
script.src = chrome.extension.getURL('/require.js');
script.setAttribute('data-main', chrome.extension.getURL('tempmain'));
document.body.appendChild(script);
