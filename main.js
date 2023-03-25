function preload() {
	world_start = loadSound("world_start.wav");
	marioCoin = loadSound("coin.wav");
	gameOver = loadSound("gameover.wav");
	marioJump = loadSound("jump.dwav");
	marioKick = loadSound("kick.wav");
	marioDie = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("gameConsole");

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on("pose", gotResults);
}

function modelLoaded() {
	console.log("Model Loaded");
}

function gotResults(results) {
	if(gotResults.length > 0) {
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

function draw() {
	game()
}






