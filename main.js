song="";
scoreRightWrist=0;
scoreLeftWrist=0;
leftWristX=0;
rightWristX=0;
leftWristY=0;
rightWristY=0;

function preload(){
    song=loadSound("music.mp3");
}

function setup(){
    canvas=createCanvas(400, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
}

function modelLoaded(){
    console.log("Model's been initialised");
}

function draw(){
    image(video, 0, 0, 400, 300);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}