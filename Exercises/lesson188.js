var app = new ToDoApp();

function ToDoApp() {
  this.todos = loadFromLocalStorage();
  updateUI = updateUI.bind(this);

  updateUI();

  function loadFromLocalStorage() {
    return [{'task': 'test task', 'date': '23232', 'state': false}];
  }

  function updateUI() {
    var tmp = this.todos.reduce((acc, val) => acc + parseToDo(val), "");
    document.querySelector(".list").innerHTML = tmp;
  }

  this.addToDo = function (a) {
    this.todos.push({
      'task': a,
      'date': new Date(),
      'state': true
    });
    updateUI();
  }

  function parseToDo(todoObj) {
    return `<li class="list__item">
      <div class="list__item-text ${todoObj.state ? 'done': ''}">${todoObj.task}</div>
      <div class="list__item-delete"><i class="fas fa-trash"></i></div>
      <div class="list__item-date">${todoObj.date}</div>
    </li>`
  }



}


document.querySelector("input").addEventListener("keyup", handleKeyPress);

function handleKeyPress(e) {
  if (e.which === 13 && e.target.value) {
    e.preventDefault();
    app.addToDo(e.target.value)
  } else if (e.which === 13 && !e.target.value) {
    //add shake animation, remove when it's done
    this.classList.add("wrong");
    this.addEventListener("animationend", () => this.classList.remove("wrong"));
  }
}

//update local storage
