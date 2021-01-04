var app = new ToDoApp();

function ToDoApp() {
  this.todos = loadFromLocalStorage();

  updateUI = updateUI.bind(this);
  updateUI();

  function markComplete() {
    //visually mark complete
    this.classList.toggle("done");
    //mark complete in memory
    const elementToComplete = findToDoListIndex(this.dataset.id);
    app.todos[elementToComplete].state = !(app.todos[elementToComplete].state);
    writeToStorage();
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

    //write to storage
    writeToStorage();
    updateUI();
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
    writeToStorage();
  }

  function findToDoListIndex (elementID) {
    return app.todos.findIndex(val => val.id == elementID);
  }

  function loadFromLocalStorage() {
    try {
      return JSON.parse(window.localStorage["todoApp"]);
    } catch (e) {
      window.localStorage = JSON.stringify([]);
      return [];
    }
  }

  function updateUI() {
    var tmp = this.todos.reduce((acc, val) => acc + parseToDo(val), "");

    document.querySelector(".list").innerHTML = tmp || "<span>:(</span>";

    document.querySelectorAll(".list__item-text").forEach(val => {
      val.addEventListener("click", markComplete)
    });
    document.querySelectorAll(".list__item-delete").forEach(val=>{
      val.addEventListener("click", handleDelete)
    });
  }

  function parseToDo(todoObj) {
    return `<li class="list__item">
      <div class="list__item-text ${todoObj.state ? 'done': ''}" data-id=${todoObj.id}>${todoObj.task}</div>
      <div class="list__item-delete" data-id=${todoObj.id}><i class="fas fa-trash"></i></div>
      <div class="list__item-date">${stringifyDate(todoObj.date)}</div>
    </li>`
  }

  function stringifyDate(date) {
    const dateDiff = (Date.now() - (new Date(date))) / 1000;

    if (dateDiff < 5) {
      return "just now"
    } else if (dateDiff < 60) {
      return `${Math.round(dateDiff)} sec ago`;
    } else if (dateDiff < 3600) {
      const tmp = Math.round(dateDiff / 60);
      return tmp + ` min${tmp == 1 ? "" : "s"} ago`;
    } else if (dateDiff < (48 * 60 * 60)) {
      return Math.round(dateDiff / 60 / 60) + ' hrs ago';
    } else {
      return Math.round(dateDiff / 60 / 60 / 24) + ' days ago'
    }
  }
  function writeToStorage() {
    window.localStorage["todoApp"] = JSON.stringify(app.todos);
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
