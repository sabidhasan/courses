var app = new ToDoApp();

function ToDoApp() {
  this.todos = loadFromLocalStorage();

  updateUI = updateUI.bind(this);
  updateUI();

  function handleDelete() {
    //visually remove element
    this.parentElement.classList.add("delete");
    this.parentElement.addEventListener("transitionend", () => {
      this.parentElement.parentElement.removeChild(this.parentElement);
    })
  }

  function loadFromLocalStorage() {
    //TO--DO - load from local storage
    return [{'id': '1', 'task': 'test task', 'date': '23232', 'state': false}];
  }

  function updateUI() {
    var tmp = this.todos.reduce((acc, val) => acc + parseToDo(val), "");

    document.querySelector(".list").innerHTML = tmp;
    document.querySelectorAll(".list__item-delete").forEach(val=>val.addEventListener("click", handleDelete));
  }

  this.addToDo = function (a) {
    this.todos.push({
      'task': a,
      'date': new Date(),
      'state': false
    });
    updateUI();
  }

  function parseToDo(todoObj) {
    return `<li class="list__item">
      <div class="list__item-text ${todoObj.state ? 'done': ''}">${todoObj.task}</div>
      <div class="list__item-delete" data-id=${todoObj.id}><i class="fas fa-trash"></i></div>
      <div class="list__item-date">${todoObj.date}</div>
    </li>`
  }



}


document.querySelector("input").addEventListener("keyup", handleKeyPress);

function handleKeyPress(e) {
  if (e.which === 13 && e.target.value) {
    e.preventDefault();
    app.addToDo(e.target.value);
    this.value = ""
  } else if (e.which === 13 && !e.target.value) {
    //add shake animation, remove when it's done
    this.classList.add("wrong");
    this.addEventListener("animationend", () => this.classList.remove("wrong"));
  }
}

//update local storage
