// Listen for navigation events
chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
    // Check if the URL is from arXiv
    if (details.url.includes('arxiv.org')) {
      // Replace arxiv.org with alphaxiv.org
      const newUrl = details.url.replace('arxiv.org', 'alphaxiv.org');
      
      // Update the tab with the new URL
      chrome.tabs.update(details.tabId, { url: newUrl });
    }
  });