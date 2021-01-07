"use strict";

var appTitle = "React Transportation";
var inventory = { "cars": [{ year: 2013, model: "A", price: 32000 }, { year: 2011, model: "B", price: 4400 }, { year: 2016, model: "C", price: 15500 }],
  "trucks": [{ year: 2014, model: "D", price: 18000 }, { year: 2013, model: "E", price: 5200 }],
  "convertibles": [{ year: 2009, model: "F", price: 2000 }, { year: 2010, model: "G", price: 6000 }, { year: 2012, model: "H", price: 12500 }, { year: 2017, model: "M", price: 50000 }]
};

function ShowTitle(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Welcome to ",
      props.title
    ),
    React.createElement(
      "h2",
      null,
      "The best place to buy vehicles online"
    )
  );
}
function ShowOptions() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h3",
      null,
      "Choose Options"
    ),
    React.createElement(
      "p",
      null,
      React.createElement("input", { type: "checkbox", id: "new" }),
      React.createElement(
        "label",
        { "for": "new" },
        "New Only"
      )
    ),
    React.createElement(
      "p",
      null,
      "Select Type",
      React.createElement(
        "select",
        null,
        React.createElement(
          "option",
          { value: "all" },
          "All"
        ),
        React.createElement(
          "option",
          { value: "cars" },
          "Cars"
        ),
        React.createElement(
          "option",
          { value: "trucks" },
          "Trucks"
        ),
        React.createElement(
          "option",
          { value: "convertibles" },
          "Convertibles"
        )
      )
    )
  );
}
function ShowVehicles(props) {
  var ret = props.vehicles.map(function (val) {
    return React.createElement(
      "tr",
      null,
      React.createElement(
        "td",
        null,
        val.year
      ),
      React.createElement(
        "td",
        null,
        val.model
      ),
      React.createElement(
        "td",
        null,
        val.price
      ),
      React.createElement(
        "td",
        null,
        React.createElement(
          "button",
          null,
          "Buy Now"
        )
      )
    );
  });

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h3",
      null,
      props.type
    ),
    React.createElement(
      "table",
      null,
      React.createElement(
        "tr",
        null,
        React.createElement(
          "th",
          null,
          "Year"
        ),
        React.createElement(
          "th",
          null,
          "Model"
        ),
        React.createElement(
          "th",
          null,
          "Price"
        ),
        React.createElement(
          "th",
          null,
          "Buy"
        )
      ),
      ret
    )
  );
}
function ReactTransportApp(props) {
  var ret = [React.createElement(ShowTitle, { title: appTitle }), React.createElement(ShowOptions, null)];

  for (var car in inventory) {
    ret.push(React.createElement(ShowVehicles, { vehicles: inventory[car], type: car }));
  }

  return React.createElement(
    "div",
    null,
    ret
  );
}

ReactDOM.render(React.createElement(ReactTransportApp, null), document.getElementById("root"));