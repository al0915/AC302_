console.log("test...");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "rgb(0,100,200)";
var x = 0;
var y = 0;
var width = 300;
var height = 300;
ctx.fillRect(x,y,width, height);

while(width > 0) {
	x += 10;
	y += 10;
	width -= 20;
	height -= 20;
	ctx.clearRect(x,y,width,height);
	x += 10;
	y += 10;
	width -= 20;
	height -= 20;
	ctx.fillRect(x,y,width,height);
}