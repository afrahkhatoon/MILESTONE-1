const num1 = 10;
const operator = "+";
const num2 = 20;
let result;
switch (operator) {
  case "+":
    result = num1 + num2;
    console.log(result);
    break;
  case "-":
    result = num1 - num2;
    console.log(result);
    break;
  case "*":
    result = num1 * num2;
    console.log(result);
    break;
  case "/":
    result = num1 / num2;
    console.log(result);
    break;
  default:
    console.log("Invalid operator");
}
