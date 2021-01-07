function Scorekeeper(){
  //set basic parameters
  var score = {1: 0, 2: 0};
  this.limit = 5;
  //keeps track of end game
  this.end = false;

  Object.defineProperty(this, "score", {
    get: function() {return score},
    set: function(player) {
      //update score if needed
      if (score[player] < this.limit && this.end === false) score[player] += 1;
      //if limit reached, call end game
      if (score[player] == this.limit) this.end = true;

      this.updateUI();
    }
  });

  this.updateLimit = function(limit) {
    if (!this.end) {
      this.limit = limit;
    }
    this.updateUI();
  }

  this.updateUI = function() {
    //update p1 score (remove class), p2 score (remove class), limit and number box
    //check for win condition
    document.querySelectorAll(".score-data").forEach(player => {
      //update text for player
      let currScore = score[player.dataset.player];
      player.textContent = currScore;
      //update style if win
      if (currScore == this.limit) {
        player.classList.add("win");
      } else {
        player.classList.remove("win")
      }
    });
    document.querySelector(".target-score").textContent = this.limit;
    document.querySelector("input[type='number']").value = this.limit;
  }
  //update the UI
  this.updateUI();
}

var state = new Scorekeeper();

//event handler for reset
document.querySelector(".reset").addEventListener("click", function() {
  state = new Scorekeeper();
});

document.querySelectorAll(".player").forEach(elem => {
  elem.addEventListener("click", function() {
    state["score"] = this.dataset.player;
  })
});

document.querySelector("input[type='number']").addEventListener("change", function() {
  state.updateLimit(this.value)
});
