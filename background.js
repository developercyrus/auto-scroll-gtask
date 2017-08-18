/*
 * https://stackoverflow.com/a/7226442 
 * https://gist.github.com/danharper/8364399
 * https://stackoverflow.com/a/18611705
 * https://stackoverflow.com/a/18788972
 */
var x = false;

function disableBrowserAction(){
    chrome.tabs.executeScript(null, {allFrames: true, file: "stop.js"})
    
}

function enableBrowserAction(){
    chrome.tabs.executeScript(null, {allFrames: true, file: "scroll.js"});
}

function updateState(){
    if(x == false){
        x = true;
        enableBrowserAction();
    }
    else{
        x = false;
        disableBrowserAction();
    }
}

chrome.browserAction.onClicked.addListener(updateState);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.msg == "checkIfFalse") {
		console.log("background script: x = " + x);
		sendResponse({ result: x });
	} 
	else {
		sendResponse({ result: "error" });
	}		
	return true; 
});
