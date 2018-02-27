var level;
var game;

//new game button
document.querySelector(".options__new").addEventListener("click", setupGame);

//easy hard binder button
const difficulties = document.querySelectorAll(".options__difficulty span");
difficulties.forEach(val => val.addEventListener("click", function() {
  //toggle active on all, launch game
  difficulties.forEach(val => {val.classList.toggle("active")});
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
  _secretIndex = Math.floor(Math.random() * this.squareNumber)
  _secretColor = this.colors[_secretIndex];

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
        "data-index": i
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
    if (e.target.dataset.index == _secretIndex) {
      //guessed right, so change message,
      setMessage("Correct!");
      document.body.style.setProperty("--active-color", rgbFromArray(_secretColor))
      setupGame();
    } else {
      //update message for wrong guess, turn square black
      setMessage("Guess again");
      e.target.classList.add("disabled");
      // e.target.style.backgroundColor = rgbFromArray([0,0,0]);
    }
  }
}
