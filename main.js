function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550)
    canvas.center();
    posenet = ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotResult)
}

function draw() {
    background("ff0000");
}

function modelloaded() {
    console.log("Model has got Loaded !")

}

function gotResult(results) {
    if(results.length > 0) {
        console.log(results);
    }
}