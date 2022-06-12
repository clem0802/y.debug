const operators = document.getElementById("operators");
let currentOperator = "";

operators.addEventListener('change', function (events) {
    currentOperator = events.target.value;
})

function calculator() {
    let firstNumber = parseInt(document.getElementById("firstNumber").value);
    let secondNumber = parseInt(document.getElementById("secondNumber").value);

    switch (currentOperator) {
        case "+":
            addResult = firstNumber + secondNumber;
            text = addResult;
            break;
        case "-":
            subResult = firstNumber - secondNumber;
            text = subResult;
            break;
        case "*":
            mulResult = firstNumber * secondNumber;
            text = mulResult;
            break;
        case "/":
            divResult = firstNumber / secondNumber;
            text = divResult;
            break;
        case "%":
            modResult = firstNumber % secondNumber;
            text = modResult;
        break;
        default:
            console.log("Invalid Operator")
            break;
    }

    const output = document.getElementById("result").innerHTML = text;
}

