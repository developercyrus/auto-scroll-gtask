/*
 * click once for scroll up 
 * click once to stop, and vice versa
*/


/*
 *  work for 
 *  https://mail.google.com/tasks/canvas?pli=1
 */
function scrollUp() {
	chrome.runtime.sendMessage({msg: "checkIfFalse"}, function(response) {
		console.log("content script : response.result = " + response.result);
		if (response.result == true) {
		    try {
		    	// only works in chrome console but doesn't work in actual environment
		    	//document.querySelector("div.J").scrollTop += 1;
		    	
		    	// only works in actual environment but doesn't work in chrome console
		    	document.getElementsByTagName("iframe")[0].contentDocument.querySelector("div.J").scrollTop -= 1
		    }
		    catch(err) {
		    	//console.log(err);
		    }
		  
		    //console.log('scolling!');
		    setTimeout(function(){scrollUp();}, 50);
		}
	});
}

scrollUp();


