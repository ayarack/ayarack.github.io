//initializing variables to create a canvas 
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

let myNumber = 10;

if (true) {
  alert("You will make a choice!");
  if(myNumber > 20){
    alert("uh oh...");
  }
}

let drawTri = true;
let drawCir = false;

let player = prompt("Circle, square, or triangle?");
let cpu = "square";

function CST(){
  if (player == "triangle" && cpu == "square") {
    drawTriangle();
  }
}

function CST2(){
  if (player == "circle" && cpu == "square") {
    drawCircle();
  }
}

function CST3(){
  if (player == "square" && cpu == "square") {
    drawSquare();
  }
}

function drawTriangle() {
      //ctx.beginPath();
      ctx.moveTo(75, 50);
      ctx.lineTo(100, 75);
      ctx.lineTo(100, 25);
      ctx.fill();
    }

  function drawSquare(){
    ctx.fillRect(25, 25, 100, 100);
    //ctx.clearRect(45, 45, 60, 60);
    //ctx.strokeRect(50, 50, 50, 50);
  }
  function drawCircle(){
    //ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.fill(); 
  }

  function main(){
   CST();
   CST2();
   CST3();
  }

main();