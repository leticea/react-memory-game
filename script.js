class GenerateNumber extends React.Component {
  componentDidUpdate() {
    let time, digit;
    // Increase showing time depending on level
    digit = this.props.level.main + 2;
    time = 100 * Math.min(digit, 5) + 400 * Math.max(digit - 5, 0);

    let number = document.getElementById("number");
    setTimeout(() => {
      number.innerHTML = number.innerHTML.replace(/\w/gi, "&#183");
    }, time);
  }

  componentDidMount() {
    let number = document.getElementById("number");
    setTimeout(() => {
      number.innerHTML = number.innerHTML.replace(/\w|\W/gi, "&#183");
    }, 1200);
  }

  render() {
    return (
      // Render the number box
      React.createElement(
        "div",
        { className: "number-box" },
        React.createElement(
          "div",
          { className: "info-box" },
          React.createElement(
            "p",
            { className: "level" },
            "Level: ",
            this.props.level.main,
            " - ",
            this.props.level.sub
          ),
          React.createElement(
            "p",
            { className: "mistakes" },
            "Wrong: ",
            this.props.wrong,
            "/3"
          )
        ),
        React.createElement(
          "p",
          { className: "divider" },
          "############################"
        ),
        React.createElement(
          "p",
          { className: "number", id: "number" },
          this.props.wrong < 3 ? atob(this.props.question) : "????"
        ),
        React.createElement(
          "p",
          { className: "divider" },
          "############################"
        )
      )
    );
  }
}

class InputNumber extends React.Component {
  constructor() {
    super();
    // Bind event handlers to the component instance
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleUserInput(e) {
    e.preventDefault();
    // Get user input
    let userNumber = btoa(this.userNumber.value);
    this.userNumber.value = "";
  }
}
