function setup() {
    canvas = createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.hide();
    canvas.center();
}

function draw() {
image(video, 0, 0, 640, 480);

fill("blue");
stroke("red");
circle(50, 50, 50);
circle(600, 50, 50);
circle(600, 430, 50);
circle(50, 430, 50);
fill("black");
stroke("green");
rect(75, 40, 500, 20);
rect(75, 420, 500, 20);
rect(45, 60, 20, 345);
rect(590,60, 20, 345);
}
