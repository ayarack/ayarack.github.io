// write a program that creates rock paper scissors logic using circle, square, triangle
//global variables
let player;
let mouseCoords = [];

 // objects
 var myCircle = {
  x: 100,
  y: 75,
  w: 100,
  radius: 50,
};

// gets mouse position when clicked

addEventListener('mousedown', mouseClick);

function mouseClick(e) {
  console.log( `
    Screen X/Y: ${e.screenX}, ${e.screenY}
	Client X/Y: ${e.clientX}, ${e.clientY}`);
	mouseCoords =  [e.clientX, e.clientY];
  if (myCircle.x < mouseCoords[0] && myCircle.x + myCircle.w > mouseCoords[0] -25){
    console.log("inside");

  }
}


//initialize variables
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

let choices =  ["rock", "paper", "scissors"];

function randChoice(x){
    return Math.floor(Math.random()*x);
}

let cpuChoice = 0;
// let cpuChoice = randChoice(choices.length);

console.log(choices[cpuChoice]);

function drawTriangle() {
      ctx.beginPath();
      ctx.moveTo(75, 50);
      ctx.lineTo(100, 75);
      ctx.lineTo(100, 25);
      ctx.fill();
    }

  function drawSquare(){
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }

 

console.log(myCircle.x);

  function drawCircle(){
    ctx.arc(myCircle.x, myCircle.y, myCircle.radius, 0, 2 * Math.PI);
    ctx.stroke();
  }
drawCircle();
  function main(){
  }

main();