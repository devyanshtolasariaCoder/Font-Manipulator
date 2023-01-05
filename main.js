difference=0;
leftWristX=0;
rightWristX=0;

function setup(){
     video= createCapture(VIDEO);
     video.size(550,550);
     
     canvas= createCanvas(550, 550);
     canvas.position(960,100);

     poseNet=ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);
    }
function draw(){
    background('#0000ff');
    
    fill('#ff0000');
    stroke('#000000');
    text('Devyansh', 100,300);
    textSize(difference);

}
function modelLoaded(){
   console.log("PoseNet is Initialised");
}
function gotPoses(results){
 if(results.length > 0){
    console.log(results);
    leftWristX= results[0].pose.leftWrist.x;
    rightWristX= results[0].pose.rightWrist.x;
    console.log("X coordinate of Left Wrist = " + leftWristX);
    console.log("X coordinate of Right Wrist =  " + rightWristX);
    difference= floor(leftWristX - rightWristX);
    console.log("Difference" + difference);
   }
}