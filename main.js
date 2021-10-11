song="";

function setup()
{
canvas=createCanvas(200,200);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}

function draw()
{
image(video,0,0,200,200);
}

function preload()
{
song=loadSound("Made-In-India(PaglaSongs).mp3");
}

function play()
{
song.play();
}

function stop()
{
song.stop();
}