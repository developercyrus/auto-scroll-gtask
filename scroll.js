/*
 * 
 * work for 
 * https://mail.google.com/tasks/m
 * 
 * doesn't work for 
 * https://mail.google.com/tasks/canvas
 * 
 */

function scroll() { 
	scroll = setInterval(function(){ 
		window.scrollBy(0, 2); 
		console.log('scroll');
	}, 250);
}
scroll();