/*
 * 
 * work for 
 * https://mail.google.com/tasks/m
 * 
 * doesn't work for 
 * https://mail.google.com/tasks/canvas
 * 
 */

function scrollDown() { 
	scroll = setInterval(function(){ 
		window.scrollBy(0, -1); 
		console.log('scrolling down');
	}, 50);
}

function scrollUp() { 
	scroll = setInterval(function(){ 
		window.scrollBy(0, -1); 
		console.log('scrolling up');
	}, 50);
}
scrollUp();
//scrollDown();