/*
 *  work for 
 *  https://mail.google.com/tasks/canvas?pli=1
 */

function scrollDown() {
    try {
    	// only works in chrome console but doesn't work in actual environment
    	//document.querySelector("div.J").scrollTop += 1;
    	
    	// only works in actual environment but doesn't work in chrome console
    	document.getElementsByTagName("iframe")[0].contentDocument.querySelector("div.J").scrollTop += 1
    }
    catch(err) {
    	//console.log(err);
    }
  
    //console.log('scolling!');
    setTimeout(function(){scrollDown();}, 100);
}

function scrollUp() {
    try {
    	document.getElementsByTagName("iframe")[0].contentDocument.querySelector("div.J").scrollTop -= 1
    }
    catch(err) {
    	//console.log(err);
    }
  
    //console.log('scolling!');
    setTimeout(function(){scrollUp();}, 100);
}

//scrollDown();
scrollUp();
