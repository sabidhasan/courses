var app = new ToDoApp();

function ToDoApp() {
  this.todos = loadFromLocalStorage();

  updateUI = updateUI.bind(this);
  updateUI();

  function markComplete() {
    //visually mark complete
    this.classList.toggle("done");
    //mark checked
    const elementToComplete = findToDoListIndex(this.dataset.id);
    app.todos[elementToComplete].state = !(app.todos[elementToComplete].state);
  }

  function handleDelete() {
    //visually remove element
    this.parentElement.classList.add("delete");
    this.parentElement.addEventListener("transitionend", () => {
      const grandParent = this.parentElement.parentElement;
     grandParent.removeChild(this.parentElement);
    });

    //remove from internal list (deleteID)
    const elementToRemove = findToDoListIndex(this.dataset.id);
    app.todos.splice(elementToRemove, 1);
  }

  function findToDoListIndex (elementID) {
    return app.todos.findIndex(val => val.id == elementID);
  }
  function loadFromLocalStorage() {
    //TO--DO - load from local storage
    return [{'id': 1, 'task': 'test task', 'date': '23232', 'state': false}];
  }

  function updateUI() {
    var tmp = this.todos.reduce((acc, val) => acc + parseToDo(val), "");

    document.querySelector(".list").innerHTML = tmp;

    document.querySelectorAll(".list__item-text").forEach(val => {
      val.addEventListener("click", markComplete)
    });
    document.querySelectorAll(".list__item-delete").forEach(val=>{
      val.addEventListener("click", handleDelete)
    });
  }

  this.addToDo = function (text) {
    const newID = this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 0
    this.todos.push({
      'id': newID,
      'task': text,
      'date': new Date(),
      'state': false
    });
    updateUI();
  }

  function parseToDo(todoObj) {
    return `<li class="list__item">
      <div class="list__item-text ${todoObj.state ? 'done': ''}" data-id=${todoObj.id}>${todoObj.task}</div>
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
