var ball;

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var pos = database.ref("Ball/Position");
    pos.on("value",readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
database.ref("Ball/Position").set({
'X':chaPos.X + x ,
'Y':chaPos.Y+ y,
});
}

function readPosition(data){
chaPos = data.val();
ball.x = chaPos.X;
ball.y = chaPos.Y;
}