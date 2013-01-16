var v = document.querySelector("#v"),
	c = document.querySelector('#c'),
	x = c.getContext('2d'),
	hl = document.querySelector('#hightlight'),
	pixels;

navigator.webkitGetUserMedia({video:true},function(stream){
	v.src = URL.createObjectURL(stream);
	v.play();
	setInterval(draw, 200);
});



//Let's put the video into the canvas now
