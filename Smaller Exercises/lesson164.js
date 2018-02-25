//start color game (1 is easy 2 is hard)
var game = new ColorGame(2);

//new color button binder TO--DO
//easy hard binder button TO--DO



function ColorGame(difficulty) {
  //make colors
  this.squareNumber = difficulty * 3;
  this.colors = generateColors(this.squareNumber);
  _secretColor = this.colors[Math.floor(Math.random() * difficulty)];

  //bind functions
  updateUI = updateUI.bind(this)
  checkAnswer = checkAnswer.bind(this)

  //update the UI
  updateUI();

  function updateUI() {
    //create squares, update their colors
    for (var i = 0; i < this.squareNumber; i++) {
      let currentColor = this.colors[i];

      var square = document.createElement("div")
      setAttributes(square, {
        "class": "square__box",
        "data-r": currentColor[0],
        "data-b": currentColor[1],
        "data-g": currentColor[2]
      });
      square.style.backgroundColor = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`
      square.addEventListener("click", (e) => {checkAnswer(e)})
      document.querySelector(".square").appendChild(square);
    }

    //update text at the top for guess
    document.querySelectorAll(".rgb").forEach((val, i) => {
        val.textContent = _secretColor[i];
    });
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
    console.log(_secretColor)
    console.log(e.target.dataset)
  }
}
