const calculate = (n1, operator, n2) => {
  let number1 = Number(n1);
  let number2 = Number(n2);
  switch (operator) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    case "/":
      return number1 / number2;

    default:
      break;
  }
};

addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector("#calculatorDisplay");
  const keySelected = document.querySelectorAll("button");
  const divCalculator = document.querySelector(".calculator-keys");
  let firstNumber;
  let secondNumber;
  let operator;
  let result;

  keySelected.forEach((key) => {
    key.addEventListener("click", (e) => {
      /* let attribute = e.target.getAttribute("data-type"); */
      let type = e.target.dataset.type;
      let keyValue = e.target.value;

      const { previousKeyType } = divCalculator.dataset;

      /* because I'm using input I need do use value not textConten
      input. value is for form elements to get the value of the form 
      element. input. textContent is for other elements to get the 
      content of the element.
      */

      if (type === "number") {
        if (display.value === "0") {
          display.value = keyValue;
        } else if (previousKeyType === "operator") {
          firstNumber = display.value;
          display.value = keyValue;
        } else {
          display.value = display.value + keyValue;
        }
      }

      if (type === "operator") {
        operator = keyValue;
      }

      if (type === "equal") {
        secondNumber = display.value;
        result = calculate(firstNumber, operator, secondNumber);
        display.value = result;
      }
      if (type === "clearAll") {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        display.value = "0";
        console.log({ firstNumber }, { secondNumber }, { operator });
      }
      /* Attribuition of dataset */
      divCalculator.dataset.previousKeyType = type;
    });
  });
});
