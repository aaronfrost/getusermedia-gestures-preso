var v = document.querySelector("#v"),
	c = document.querySelector('#c'),
	hl = document.querySelector('#hightlight'),
	pixels;

navigator.webkitGetUserMedia({video: true},function(stream){
	v.src = URL.createObjectURL(stream);
	v.play();
	setInterval(draw,200);
});


function draw(){

	var w = v.width,
		h = v.height;

	x.drawImage(v, 0, 0, w, h);

	//Let's add some bloody stuff the analyze the image in the canvas

}

