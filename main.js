let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

// Adding images in JS but not drawing/setting
let bird = new Image();
let background = new Image();
let foreground = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

bird.src = "img/bird.png";
background.src = "img/bg.png";
foreground.src = "img/foreground.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

// Space between of pipes
let gap = 100;

//When you press the keyboard
document.addEventListener("keydown", takeWing);
function takeWing() {
  yPosition -= 25;
}

// Creating bloks
let blocks = [];

blocks[0] = {
  x: canvas.width,
  y: 0,
};

let score = 0;
// Bird Position
let xPosition = 10;
let yPosition = 150;
let gravity = 1.5;

// Setting/drawing/adding images and setting their position
function pictures() {
  context.drawImage(background, 0, 0);
  for (let i = 0; i < blocks.length; i++) {
    context.drawImage(pipeUp, blocks[i].x, blocks[i].y);
    context.drawImage(
      pipeBottom,
      blocks[i].x,
      blocks[i].y + pipeUp.height + gap
    );
    blocks[i].x--;

    if (blocks[i].x == 100) {
      blocks.push({
        x: canvas.width,
        y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height,
      });
    }
    if (
      (xPosition + bird.width >= blocks[i].x &&
        xPosition <= blocks[i].x + pipeUp.width &&
        (yPosition <= blocks[i].y + pipeUp.height ||
          yPosition + bird.height >= blocks[i].y + pipeUp.height + gap)) ||
      yPosition + bird.height >= canvas.height - foreground.height
    ) {
      setTimeout(function () {
        window.location.reload();
      });
    }
    if (blocks[i].x == 5) {
      score++;
    }
  }

  context.drawImage(foreground, 0, canvas.height - foreground.height);
  context.drawImage(bird, xPosition, yPosition);
  yPosition += gravity;
  requestAnimationFrame(pictures);

  context.fillStyle = "#000";
  context.font = "26px Roboto";
  context.fillText("Score: " + score, 10, canvas.height - 20);
}

pipeBottom.onload = pictures;
