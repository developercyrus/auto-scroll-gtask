/*
 * https://stackoverflow.com/a/7226442 
 * https://gist.github.com/danharper/8364399
 */
chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.ib, {
		allFrames: true, 
		file: "scroll.js"
	});
});
