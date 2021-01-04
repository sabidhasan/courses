"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Quiz = function (_React$Component) {
  _inherits(Quiz, _React$Component);

  function Quiz(props) {
    _classCallCheck(this, Quiz);

    //generate initial state

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
    //Needed for inheritance

    _this.state = generateNewQuestions();
    //bind the function so it can use 'this'
    _this.checkAnswer = _this.checkAnswer.bind(_this);
    return _this;
  }

  Quiz.prototype.render = function render() {
    //to hold the buttons
    var q = [];
    //loop through adding Button react elements
    for (var i = 0; i < 4; i++) {
      q.push(React.createElement(Button, { value: this.state.options[i], ansFunc: this.checkAnswer, id: i }));
    }

    return React.createElement(
      "div",
      null,
      React.createElement(Question, { questions: this.state.question, operator: this.state.operator }),
      React.createElement(
        "div",
        { className: "buttons" },
        q
      ),
      React.createElement(Marks, { correct: this.state.correct, incorrect: this.state.incorrect })
    );
  };

  Quiz.prototype.checkAnswer = function checkAnswer(index) {
    //If answer on the button matches the answer
    if (this.state.answer == this.state.options[index]) {
      //update the state
      this.setState(function (prevState, props) {
        var x = generateNewQuestions(prevState);
        x.correct++;
        return x;
      });
    } else {
      //answer is wrong, so update the state with that
      this.setState({ incorrect: this.state.incorrect + 1 });
    }
  };

  return Quiz;
}(React.Component);

//Options React element

function Options(props) {
  return React.createElement(
    "div",
    { className: "options" },
    React.createElement("input", { type: "range", min: "3", max: "6", value: "6", onChange: function onChange() {
        props.optionsChange(event);
      } }),
    React.createElement(
      "p",
      null,
      props.optVal
    )
  );
}

//Generates marks div
function Marks(props) {
  return React.createElement(
    "div",
    { className: "marks" },
    React.createElement(
      "h2",
      null,
      "Correct ",
      React.createElement(
        "span",
        null,
        " ",
        props.correct,
        " "
      )
    ),
    React.createElement(
      "h2",
      null,
      "Incorrect ",
      React.createElement(
        "span",
        null,
        " ",
        props.incorrect
      )
    )
  );
}

//Generate new questions
function generateNewQuestions(prevState) {
  var incorrect = prevState == undefined ? 0 : prevState.incorrect;
  var correct = prevState == undefined ? 0 : prevState.correct;

  //how many numbers 25 means 0-25
  var numLimit = 25;

  var operator = ["*", "+", "-", "%"][Math.floor(Math.random() * 4)];

  function genRanNum(numberLimit) {
    return Math.floor(Math.random() * numberLimit);
  }
  function evaluate(num1, num2) {
    if (num1 == undefined) {
      num1 = genRanNum(numLimit);
      num2 = genRanNum(numLimit);
    }
    return eval(num1 + operator + num2);
  }

  var a1 = genRanNum(numLimit);
  var a2 = genRanNum(numLimit);
  var options = new Array(3).fill(0).map(function () {
    return evaluate();
  });
  options.splice(genRanNum(3), 0, evaluate(a1, a2));

  return { question: [a1, a2], operator: operator, options: options, answer: evaluate(a1, a2), incorrect: incorrect, correct: correct };
}

function Question(props) {
  return React.createElement(
    "h1",
    null,
    "Question",
    React.createElement("br", null),
    " What is ",
    props.questions[0],
    " ",
    props.operator,
    " ",
    props.questions[1],
    "?"
  );
}

function Button(props) {
  return React.createElement(
    "button",
    { onClick: function onClick() {
        props.ansFunc(props.id);
      } },
    props.value
  );
}

function shuffle(array) {
  var currentIndex = array.length,
      temporaryValue,
      randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    var _ref = [array[randomIndex], array[currentIndex]];
    array[currentIndex] = _ref[0];
    array[randomIndex] = _ref[1];
  }

  return array;
}

ReactDOM.render(React.createElement(Quiz, null), document.getElementById("root"));