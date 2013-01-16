var v = document.querySelector("#v"),
	c = document.querySelector('#c'),
	hl = document.querySelector('#hightlight'),
	pixels;

navigator.webkitGetUserMedia({video: true},function(stream){
	v.src = URL.createObjectURL(stream);
	v.play();
});

//Now let's add the video feed frames into the canvas
// THIS IS HOW WE WILL ANALYZE THE FEED, IN THE CANVAS

