var v = document.querySelector("#v"),
	c = document.querySelector('#c'),
	hl = document.querySelector('#hightlight'),
	pixels;

navigator.webkitGetUserMedia({video:true},function(stream){
	v.src = URL.createObjectURL(stream);
	v.play();
});
