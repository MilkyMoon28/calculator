let a = "";
let b = "";
let sign = "";
let finish = false;

let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let symbols = ["-", "+", "*", "/"];

const output = document.querySelector(".output");

document.querySelector(".buttons").onclick = (e) => {
  if (!e.target.classList.contains("btn")) return;
  output.innerHTML = "";
  const key = event.target.innerHTML;

  if (digits.includes(key)) {
    if (b === "" && sign === "") {
      a += key;
      console.log(a, b, sign);
      output.innerHTML = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key
      finish = false
      output.innerHTML = a
    } else {
      b += key;
      output.innerHTML = b;
    }
  }
  if (symbols.includes(key)) {
    sign = key;
    output.innerHTML = sign;
    console.log(a, b, sign);
    return;
  }
  if (key === "=") {
    switch (sign) {
      case "+":
        a = (+a) + (+b);
        break;
      case "*":
        a = a * b;
        break;
      case "/":
        a = a / b;
        break;
      case "-":
        a = a - b;
        break;
    }
    finish = true;
    output.innerHTML = a;
    console.log(a, b, sign)
  }
};
