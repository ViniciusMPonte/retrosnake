function newArrowPressedPlayingFilter(keyPressed) {

  var newArrowPressedPlaying = document.getElementById("newArrowPressedPlaying");
  var lastArrowPressedPlaying = document.getElementById("lastArrowPressedPlaying").innerHTML;
  var newGameScreen = document.querySelector(".newGame").classList[1];

  if (newGameScreen === "hidden") {

    if (keyPressed == "ArrowUp" && lastArrowPressedPlaying != "ArrowDown") {
      newArrowPressedPlaying.innerHTML = keyPressed;
    }
    if (keyPressed == "ArrowDown" && lastArrowPressedPlaying != "ArrowUp") {
      newArrowPressedPlaying.innerHTML = keyPressed;
    }
    if (keyPressed == "ArrowLeft" && lastArrowPressedPlaying != "ArrowRight") {
      newArrowPressedPlaying.innerHTML = keyPressed;
    }
    if (keyPressed == "ArrowRight" && lastArrowPressedPlaying != "ArrowLeft") {
      newArrowPressedPlaying.innerHTML = keyPressed;
    }

  }
}

function scoreAndRecord() {
  const pixel = document.querySelectorAll(".pixel");

  const score = document.getElementById("score");
  const record = document.getElementById("record");
  const resultScore = document.querySelector(".resultScore");

  var gameRunning = document.querySelector(".newGame").classList.contains("hidden");

  var pointsScore = pixel.length - 2;

  if (gameRunning) {

    score.innerHTML = pointsScore;

  } else {

    if (Number(score.innerHTML) > Number(record.innerHTML)) {
      record.innerHTML = score.innerHTML;
    }

  }

  if (record.innerHTML == "0") {
    resultScore.innerHTML = "Pontuação: " + score.innerHTML;
  } else {
    resultScore.innerHTML = "Redorde: " + record.innerHTML + " | Pontuação: " + score.innerHTML;
  }

}

function startGame() {
  const newGameScreen = document.querySelector(".newGame").classList;
  const newArrowPressedPlaying = document.getElementById("newArrowPressedPlaying");
  const score = document.getElementById("score");

  newGameScreen.add("hidden");
  newArrowPressedPlaying.innerHTML = "ArrowRight";
  score.innerHTML = "0";
}

var checkIfGameContinue = {
  ArrowUp(newHeadPosition) {
    const pixel = document.querySelectorAll(".pixel");
    for (let i = pixel.length - 1; i > 0; i--) {
      if ((newHeadPosition == pixel[i].style.top) && (pixel[0].style.left == pixel[i].style.left)) {
        return false;
        break;
      }

      if (i == 1) {
        if (newHeadPosition == "-5%") {
          return false;
        } else {
          return true;
        }
      }
    }
  },
  ArrowDown(newHeadPosition) {
    const pixel = document.querySelectorAll(".pixel");
    for (let i = pixel.length - 1; i > 0; i--) {
      if ((newHeadPosition == pixel[i].style.top) && (pixel[0].style.left == pixel[i].style.left)) {
        return false;
        break;
      }

      if (i == 1) {
        if (newHeadPosition == "100%") {
          return false;
        } else {
          return true;
        }
      }
    }
  },
  ArrowLeft(newHeadPosition) {
    const pixel = document.querySelectorAll(".pixel");
    for (let i = pixel.length - 1; i > 0; i--) {
      if ((pixel[0].style.top == pixel[i].style.top) && (newHeadPosition == pixel[i].style.left)) {
        return false;
        break;
      }

      if (i == 1) {
        if (newHeadPosition == "-5%") {
          return false;
        } else {
          return true;
        }
      }
    }
  },
  ArrowRight(newHeadPosition) {
    const pixel = document.querySelectorAll(".pixel");
    for (let i = pixel.length - 1; i > 0; i--) {
      if ((pixel[0].style.top == pixel[i].style.top) && (newHeadPosition == pixel[i].style.left)) {
        return false;
        break;
      }

      if (i == 1) {
        if (newHeadPosition == "100%") {
          return false;
        } else {
          return true;
        }
      }
    }
  }
}

function gameOver() {
  const pixel = document.querySelectorAll(".pixel");
  const borderX = '<div class="borderX"></div>';

  const food = document.querySelector(".food");

  const newGameScreen = document.querySelector(".newGame").classList;
  const text = document.querySelector(".text");
  const button = document.querySelector("button");

  const newArrowPressedPlaying = document.getElementById("newArrowPressedPlaying");

  const scoreNumber = Number(document.getElementById("score").innerHTML);
  const recordNumber = Number(document.getElementById("record").innerHTML);


  for (let i = pixel.length - 1; i > 1; i--) {
    pixel[i].remove();
  }

  pixel[0].style.top = "40%";
  pixel[0].style.left = "30%";
  pixel[0].innerHTML = borderX;
  pixel[1].style.top = "40%";
  pixel[1].style.left = "25%";
  pixel[1].innerHTML = borderX;

  food.style.top = "40%";
  food.style.left = "60%";

  newGameScreen.remove("hidden");

  if (scoreNumber > recordNumber) {
    text.innerHTML = "Parabéns, novo recorde! :D";
  } else {
    text.innerHTML = "Fim de jogo :(";
  }

  button.innerHTML = "Jogar de novo?";

  newArrowPressedPlaying.innerHTML = "";
}

var newHeadPositionCalculator = {
  ArrowUp() {
    var headPositionY = document.querySelector(".pixel").style.top;
    var newHeadPositionUp = Number(headPositionY.slice(0, headPositionY.length - 1)) - 5;
    return String(newHeadPositionUp) + "%";
  },
  ArrowDown() {
    var headPositionY = document.querySelector(".pixel").style.top;
    var newHeadPositionDown = Number(headPositionY.slice(0, headPositionY.length - 1)) + 5;
    return String(newHeadPositionDown) + "%";
  },
  ArrowLeft() {
    var headPositionX = document.querySelector(".pixel").style.left;
    var newHeadPositionLeft = Number(headPositionX.slice(0, headPositionX.length - 1)) - 5;
    return String(newHeadPositionLeft) + "%";
  },
  ArrowRight() {
    var headPositionX = document.querySelector(".pixel").style.left;
    var newHeadPositionRight = Number(headPositionX.slice(0, headPositionX.length - 1)) + 5;
    return String(newHeadPositionRight) + "%";
  }
}

function moveHead(newArrowPressedPlaying, newHeadPosition) {
  const pixel = document.querySelectorAll(".pixel");
  const borderX = '<div class="borderX"></div>';
  const borderY = '<div class="borderY"></div>';

  if (newArrowPressedPlaying == "ArrowUp" || newArrowPressedPlaying == "ArrowDown") {
    pixel[0].style.top = newHeadPosition;
    pixel[0].innerHTML = borderY;
  }
  if (newArrowPressedPlaying == "ArrowLeft" || newArrowPressedPlaying == "ArrowRight") {
    pixel[0].style.left = newHeadPosition;
    pixel[0].innerHTML = borderX;
  }
}

function moveBody() {
  const pixel = document.querySelectorAll(".pixel");
  for (let i = pixel.length - 1; i > 0; i--) {
    pixel[i].style.top = pixel[i - 1].style.top;
    pixel[i].style.left = pixel[i - 1].style.left;
    pixel[i].innerHTML = pixel[i - 1].innerHTML;
  }
}

function borderSnake(newArrowPressedPlaying) {
  const pixel = document.querySelectorAll(".pixel");
  var headPositionY = document.querySelector(".pixel").style.top;
  var headPositionX = document.querySelector(".pixel").style.left;

  var firstPixelX = Number(headPositionX.slice(0, headPositionX.length - 1));
  var firstPixelY = Number(headPositionY.slice(0, headPositionY.length - 1));
  var secondPixelX = Number(pixel[1].style.left.slice(0, pixel[1].style.left.length - 1));
  var secondPixelY = Number(pixel[1].style.top.slice(0, pixel[1].style.top.length - 1));

  const borderX = '<div class="borderX"></div>';
  const borderY = '<div class="borderY"></div>';
  const borderLT = '<div class="borderLT"></div><div class="squareLT"></div>';
  const borderLB = '<div class="borderLB"></div><div class="squareLB"></div>';
  const borderRT = '<div class="borderRT"></div><div class="squareRT"></div>';
  const borderRB = '<div class="borderRB"></div><div class="squareRB"></div>';


  switch (newArrowPressedPlaying) {

    case "ArrowLeft":
      if (firstPixelY == secondPixelY) {
        pixel[0].innerHTML = borderX;
      }
      if (firstPixelY > secondPixelY) {
        pixel[0].innerHTML = borderRB;
      }
      if (firstPixelY < secondPixelY) {
        pixel[0].innerHTML = borderRT;
      }
      break;

    case "ArrowRight":
      if (firstPixelY == secondPixelY) {
        pixel[0].innerHTML = borderX;
      }
      if (firstPixelY > secondPixelY) {
        pixel[0].innerHTML = borderLB;
      }
      if (firstPixelY < secondPixelY) {
        pixel[0].innerHTML = borderLT;
      }
      break;

    case "ArrowUp":
      if (firstPixelX == secondPixelX) {
        pixel[0].innerHTML = borderY;
      }
      if (firstPixelX > secondPixelX) {
        pixel[0].innerHTML = borderRB;
      }
      if (firstPixelX < secondPixelX) {
        pixel[0].innerHTML = borderLB;
      }
      break;

    case "ArrowDown":
      if (firstPixelX == secondPixelX) {
        pixel[0].innerHTML = borderY;
      }
      if (firstPixelX > secondPixelX) {
        pixel[0].innerHTML = borderRT;
      }
      if (firstPixelX < secondPixelX) {
        pixel[0].innerHTML = borderLT;
      }
      break;

  }
}

function newFood() {
  const pixel = document.querySelectorAll(".pixel");

  var randomY = Math.floor(Math.random() * 20) * 5;
  var randomX = Math.floor(Math.random() * 20) * 5;
  var newFoodPositionY = String(randomY) + "%";
  var newFoodPositionX = String(randomX) + "%";

  for (let i = pixel.length - 1; i > -1; i--) {

    if ((newFoodPositionY == pixel[i].style.top) && (newFoodPositionX == pixel[i].style.left)) {
      newFood();
      break;
    }

    if (i == 0) {
      document.querySelector(".food").style.top = newFoodPositionY;
      document.querySelector(".food").style.left = newFoodPositionX;
    }
  }
}

function newDiv() {
  var headPositionY = document.querySelector(".pixel").style.top;
  var headPositionX = document.querySelector(".pixel").style.left;
  var foodPositionY = document.querySelector(".food").style.top;
  var foodPositionX = document.querySelector(".food").style.left;

  var gameScreen = document.querySelector(".gameScreen");
  var newDivForNewPixel = document.createElement("div");
  var lastPositionOfPixels = document.querySelector(".food");
  var newDivObserver = document.getElementById("newDivObserver");

  gameScreen.insertBefore(newDivForNewPixel, lastPositionOfPixels);
  newDivObserver.innerHTML = "turnDivInLastPixel";
}

function newPixel() {
  const pixel = document.querySelectorAll(".pixel");
  var newDiv = document.querySelectorAll(".gameScreen div")[document.querySelectorAll(".gameScreen div").length - 2];
  var penultimatePixelNumber = document.querySelectorAll(".gameScreen .pixel").length - 2;

  newDiv.classList.add("pixel");
  newDiv.style.top = pixel[penultimatePixelNumber].style.top;
  newDiv.style.left = pixel[penultimatePixelNumber].style.left;
  newDiv.innerHTML = pixel[penultimatePixelNumber].innerHTML;
  document.getElementById("newDivObserver").innerHTML = "";
}

setInterval(function() {
  const newArrowPressedPlaying = document.getElementById("newArrowPressedPlaying").innerHTML;

  if (newHeadPositionCalculator[newArrowPressedPlaying]) {

    var newHeadPosition = newHeadPositionCalculator[newArrowPressedPlaying]();
    var gameContinue = checkIfGameContinue[newArrowPressedPlaying](newHeadPosition);

    if (gameContinue) {
      borderSnake(newArrowPressedPlaying);
      moveBody();
      moveHead(newArrowPressedPlaying, newHeadPosition);
    } else {
      gameOver();
    }

  }

  var newDivObserver = document.getElementById("newDivObserver").innerHTML

  if (newDivObserver == "turnDivInLastPixel") {
    newPixel();
  }

  scoreAndRecord();

  var lastArrowPressedPlaying = document.getElementById("lastArrowPressedPlaying");
  lastArrowPressedPlaying.innerHTML = newArrowPressedPlaying;

}, 150);

setInterval(function() {
  var headPositionY = document.querySelector(".pixel").style.top;
  var headPositionX = document.querySelector(".pixel").style.left;
  var foodPositionY = document.querySelector(".food").style.top;
  var foodPositionX = document.querySelector(".food").style.left;

  if ((headPositionY == foodPositionY) && (headPositionX == foodPositionX)) {
    newFood();
    newDiv();
  }
}, 10)

document.addEventListener("keydown", function(event) {

  var keyPressed = String(event.key);
  newArrowPressedPlayingFilter(keyPressed);

});


var touchX;
var touchY;

document.addEventListener('touchstart', function(event) {
  event.preventDefault();
  var touch = event.changedTouches[0];
  touchX = touch.pageX;
  touchY = touch.pageY;
}, false);

document.addEventListener('touchmove', function(event) {
  event.preventDefault();
  var keyPressed;
  var touch = event.changedTouches[0];
  touchDirectionX = touch.pageX - touchX;
  touchDirectionY = touch.pageY - touchY;

  if (Math.abs(touchDirectionX) > Math.abs(touchDirectionY)) {

    if (touchDirectionX < 0) {
      keyPressed = "ArrowLeft";
    } else {
      keyPressed = "ArrowRight";
    }
    
  } else {

    if (touchDirectionY < 0) {
      keyPressed = "ArrowUp";
    } else {
      keyPressed = "ArrowDown";
    }
    
  }
  
  newArrowPressedPlayingFilter(keyPressed);
  
}, false);
