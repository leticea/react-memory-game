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
}
