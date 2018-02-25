//start color game
var game = new ColorGame(2);

//generate



function ColorGame(difficulty) {
  //makes color
  this.colors = generateColors(3 * difficulty);


  function generateColors(size) {
    let r = [];
    for (var i = 0; i < size; i++) {
      r.push([Math.random() * 256, Math.random() * 256, Math.random() * 256].map(Math.floor))
    }
    return r;
  }
}
