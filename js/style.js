var x;
var postX;
var postY;
var i;
// var j;
var y=[];
var color_red;
var status_red;
function setup(){
	i=0;
	createCanvas(windowWidth,windowHeight);
	// var myCanvas = createCanvas(windowWidth,windowHeight);
	// myCanvas.parent(".contents");
	// myCanvas.position(100,100);
	x = windowWidth -30;
	y[0] = 500;
	rect(x,y[0],50,50);
	frameRate(30);
	// fill(123);
	// stroke(255);
}

function draw(){
	// background(255);
	postY = y[i];
	move(postY,i);
	// y[i+1] = y[i]-1;
	i++;
}

// function move(postY,i){
// 	y[i] = postY;
// 	for(var j=0;j <i+1;j++){
// 		// translate(-j,0);
// 		rect(x,y[j],50,50);
// 			for(var k=0;k<1000;k++){
// 				rect(x-k,y[j],50,50);
// 				k++
// 			}
// 	}
// }

function move(postY,i){
	y[i] = postY;
	for(var j=0;j < i+1;j++){
		y[i+1] = y[i]-1;
		translate(-i,0);
		rect(x,y[i],50,50);
	}
}
