var v = document.querySelector("#v"),
	c = document.querySelector('#c'),
	x = c.getContext('2d'),
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

	//Get the imageData from the canvas
	var pixels = x.getImageData(0, 0, w, h);
	var pixLength = pixels.data.length / 4;

	//map: make two dimensional array to store which pixels detect green
	//scores: 2d array to store the 5x5 scores for each pixel. Each pixel
	//	gets a score of the summary of the green pixels around it. It looks
	//	at the 5 pixels to the left, right, above and below the pixel. The
	//	pixel gets the score of the sum of that total.
	var map = new Array(w);
	var scores = new Array(w);
	for(var i = 0; i < w; i++){
		map[i] = new Array(h);
		scores[i] = new Array(h);
	}

	/**
		Pretend this represents the image w=10px and h=5px
		[],[],[],[],[],[],[],[],[],[],[]
		[],[],[],[],[],[],[],[],[],[],[]
		[],[],[],[],[],[],[],[],[],[],[]
		[],[],[],[],[],[],[],[],[],[],[]
		[],[],[],[],[],[],[],[],[],[],[]
	
		-We need to fill the map array with one entry for each pixel.

		-The entry will be 1 or 0: 1 if greenish, 0 if anything else

		-We will do something with this map

	*/


}

