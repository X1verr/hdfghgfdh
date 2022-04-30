function setup () {
    video= createCapture(VIDEO);
    video.size(550, 500);

    canvas= createCanvas(550, 500);
    canvas.position(900,250);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}

function modelLoaded () {
    console.log('PoseNet Is Initialized!')
}

function draw() {
    background("#fc0303");
}

function gotPose(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
    }
}