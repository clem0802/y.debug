const operators = document.getElementById("operators");
let currentOperator = ""

operators.addEventListener('change', function (events) {
    currentOperator = events.target.value;
})

function calculator() {
    let firstNumber = parseInt(document.getElementById("firstNumber").value);
    let secondNumber = parseInt(document.getElementById("secondNumber").value);

    switch (currentOperator) {
        case "+":
            console.log(firstNumber + secondNumber)
            break;
        case "-":
            console.log(firstNumber - secondNumber)
            break;
        case "*":
            console.log(firstNumber * secondNumber)
            break;
        case "/":
            console.log(firstNumber / secondNumber)
            break;
        case "%":
            console.log(firstNumber % secondNumber)
        break;
        default:
            console.log("Invalid Operator")
            break;
    }
}