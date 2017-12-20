var capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  capture.hide();
}

function draw() {
  background(255);
  image(capture, 0, 0, windowWidth, windowHeight);
  //filter('INVERT');
  //tint(255,3,3,);
	
	textSize(windowWidth/30);
	textAlign(CENTER);
	//textFont('');
    text("The content is blocked by your Internet Service Provider", windowWidth/2, windowHeight/2);
    fill('red');

}