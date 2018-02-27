//start color game (1 is easy 2 is hard)
var level; //= getLevel();
var game; // = new ColorGame(level);

//new game button
document.querySelector(".options__new").addEventListener("click", setupGame);

//easy hard binder button
const difficulties = document.querySelectorAll(".options__difficulty span");
difficulties.forEach(val => val.addEventListener("click", function() {
  //toggle active on all
  difficulties.forEach(val => {val.classList.toggle("active")});
  //launch game
  setupGame();
}));

//launch Game
setupGame();


function setupGame() {
  level = parseInt(document.querySelector(".active").dataset["level"]);
  game = new ColorGame(level);
}

function ColorGame(difficulty) {
  //make colors
  this.squareNumber = difficulty * 3;
  this.colors = generateColors(this.squareNumber);
  this.endGame = false;
  _secretColor = this.colors[Math.floor(Math.random() * this.squareNumber)];

  //bind functions
  updateUI = updateUI.bind(this)
  checkAnswer = checkAnswer.bind(this)

  //update the UI
  updateUI();

  function updateUI() {
    //Remove old squares
    document.querySelectorAll(".square__box").forEach(val => val.remove());

    //create squares, update their colors
    for (var i = 0; i < this.squareNumber; i++) {
      //currentColor is an array of rgb colors
      let currentColor = this.colors[i];

      //create new square
      var square = document.createElement("div");
      setAttributes(square, {
        "class": "square__box",
        "data-r": currentColor[0],
        "data-g": currentColor[1],
        "data-b": currentColor[2]
      });

      //apply styles to color, add to DOM, and create event listener
      square.style.backgroundColor = rgbFromArray(currentColor)
      square.addEventListener("click", (e) => {checkAnswer(e)})
      document.querySelector(".square").appendChild(square);
    }

    //update text at the top for guess
    document.querySelectorAll(".rgb").forEach((val, i) => {
        val.textContent = _secretColor[i];
    });
  }

  function rgbFromArray(arr) {
    return `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
  }
  function setMessage(msg) {
    document.querySelector(".options__message").textContent = msg;
  }

  function setAttributes(node, attributes) {
    //set multiple attributes as object
    for (attr in attributes) {
      node.setAttribute(attr, attributes[attr]);
    }
  }

  function generateColors(size) {
    let r = [];
    for (var i = 0; i < size; i++) {
      r.push([Math.random(), Math.random(), Math.random()]
        .map(val => val * 256)
        .map(Math.floor)
      );
    }
    return r;
  }

  function checkAnswer(e) {
    //see if answer is right
    let clicked = e.target.dataset;
    if (_secretColor[0] == clicked["r"] && _secretColor[1] == clicked["g"] && _secretColor[2] == clicked["b"]) {
      //guessed right, so change message,
      setMessage("Correct!");
      document.body.style.setProperty("--active-color", rgbFromArray(_secretColor))
      setupGame();
    } else {
      //update message for wrong guess, turn square black
      setMessage("Guess again");
      e.target.style.backgroundColor = rgbFromArray([0,0,0]);
    }
  }
}
