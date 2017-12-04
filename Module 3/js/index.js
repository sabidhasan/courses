"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Boxes(props) {
  return React.createElement(
    "span",
    null,
    React.createElement(
      "p",
      null,
      props.text
    ),
    React.createElement("input", { type: "text", name: props.name, value: props.value, onChange: props.handleChange })
  );
}

function CourseChoices(props) {
  var choices = ["Science Lab", "Swimming", "Cooking", "Painting"];
  choices = choices.map(function (val, index) {
    return React.createElement(
      "option",
      { key: index, value: val },
      val
    );
  });

  return React.createElement(
    "span",
    null,
    React.createElement(
      "p",
      null,
      "Select Activity"
    ),
    React.createElement(
      "select",
      { name: props.name, value: props.value, onChange: props.handleChange },
      choices
    )
  );
}

function Checkbox(props) {
  return React.createElement(
    "span",
    { className: "checkbox" },
    React.createElement("input", { type: "checkbox", name: "check" + props.title, value: props.title, checked: props.state, onChange: props.handleChange }),
    React.createElement(
      "label",
      null,
      props.text
    )
  );
}

function SubmitButton(props) {
  return React.createElement(
    "button",
    { type: "submit", onClick: props.action, id: "submit" },
    "Add Student"
  );
}

function DeleteButton(props) {
  return React.createElement(
    "button",
    { type: "submit", onClick: function onClick() {
        return props.action(props.id);
      } },
    "X"
  );
}

function DrawTable(props) {
  var arr = props.data.map(function (val) {
    return React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        null,
        React.createElement(DeleteButton, { action: props.delete, id: val.id })
      ),
      React.createElement(
        "td",
        null,
        val.firstName
      ),
      React.createElement(
        "td",
        null,
        val.lastName
      ),
      React.createElement(
        "td",
        null,
        val.course
      ),
      React.createElement(
        "td",
        null,
        val.needs
      )
    );
  });

  return arr.length > 0 && React.createElement(
    "table",
    null,
    React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        null,
        " "
      ),
      React.createElement(
        "td",
        null,
        "First Name"
      ),
      React.createElement(
        "td",
        null,
        "Last Name"
      ),
      React.createElement(
        "td",
        null,
        "Activity"
      ),
      React.createElement(
        "td",
        null,
        "Restrictions"
      )
    ),
    arr
  );
}

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = { course: "Science Lab", data: [], firstName: "", lastName: "", checka: false, checkb: false, checkc: false };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.deleteData = _this.deleteData.bind(_this);
    _this.addData = _this.addData.bind(_this);
    return _this;
  }

  App.prototype.addData = function addData() {
    var _this2 = this;

    //If first or last name blank, do nothing
    if (!this.state.firstName || !this.state.lastName) return null;
    //Determine what is checked
    var needs = ['a', 'b', 'c'].filter(function (val) {
      return _this2.state['check' + val] === true;
    }).join("") || "None";
    //if (!needs) needs = "None"

    //add on the new data
    var newData = this.state.data.concat([{ firstName: this.state.firstName, lastName: this.state.lastName, course: this.state.course, needs: needs, id: this.state.data.length }]);
    //update the state with new data
    this.setState({ data: newData, course: "Science Lab", firstName: "", lastName: "", checka: false, checkb: false, checkc: false }, function () {
      return console.log(_this2.state.data);
    });
  };

  App.prototype.deleteData = function deleteData(index) {
    var data = this.state.data.slice();
    data.splice(index, 1);
    data = data.map(function (val, i) {
      if (i >= index) {
        val.id -= 1;
      }
      return val;
    });
    this.setState({ data: data });
  };

  App.prototype.handleChange = function handleChange(event) {
    var _setState,
        _this3 = this;

    //is it a checkbox or inputbox/select box?
    var valueToCheck = event.target.name.indexOf("check") !== -1 ? "checked" : "value";
    this.setState((_setState = {}, _setState[event.target.name] = event.target[valueToCheck], _setState), function () {
      return console.log(_this3.state);
    });
  };

  App.prototype.render = function render() {
    var _this4 = this;

    var checkboxes = [{ title: "a", text: "dietary restrictions" }, { title: "b", text: "physical disabilities" }, { title: "c", text: "medical needs" }];
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        null,
        "Student Management System"
      ),
      React.createElement(Boxes, { value: this.state.firstName, handleChange: this.handleChange, text: "First Name", name: "firstName" }),
      React.createElement(Boxes, { value: this.state.lastName, handleChange: this.handleChange, text: "Last Name", name: "lastName" }),
      React.createElement(CourseChoices, { value: this.state.course, handleChange: this.handleChange, name: "course" }),
      React.createElement(
        "p",
        null,
        "Check all that apply"
      ),
      checkboxes.map(function (val) {
        return React.createElement(Checkbox, { title: val.title, handleChange: _this4.handleChange, state: _this4.state["check" + val.title], text: val.text });
      }),
      React.createElement(SubmitButton, { action: this.addData, onClick: this.addData }),
      React.createElement(DrawTable, { data: this.state.data, "delete": this.deleteData })
    );
  };

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));