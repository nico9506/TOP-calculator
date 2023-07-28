let history = document.getElementById("history");
let display = document.getElementById("display");

let total = ""; //keeps the last input value or the last calculated value
let lastOperator = "";
let isOperatorSelected = false;

const buttonsArray = [...document.querySelectorAll("button")];

buttonsArray.forEach((btn) => {
    btn.addEventListener("click", updateDisplay);
});

function updateDisplay() {
    //Function buttons functionalities
    switch (this.id) {
        case "ac-btn":
            history.textContent = " ";
            display.textContent = "";
            total = "";
            break;

        case "del-btn":
            if (display.textContent.length > 0)
                display.textContent = display.textContent.slice(0, -1);
            break;

        case "percent-btn":
            break;

        case "divide-btn":
            if (display.textContent.length < 1) break;
            if (lastOperator.length < 1) lastOperator = "/";
            total == ""
                ? (total = Number(display.textContent))
                : calculateTotal(lastOperator);

            lastOperator = this.textContent;
            history.textContent = total + " " + lastOperator;
            display.textContent = "";

            break;

        case "mult-btn":
            if (display.textContent.length < 1) break;
            if (lastOperator.length < 1) lastOperator = "X";
            total == ""
                ? (total = Number(display.textContent))
                : calculateTotal(lastOperator);

            lastOperator = this.textContent;
            history.textContent = total + " " + lastOperator;
            display.textContent = "";

            break;

        case "minus-btn":
            if (display.textContent.length < 1) break;
            if (lastOperator.length < 1) lastOperator = "-";
            total == ""
                ? (total = Number(display.textContent))
                : calculateTotal(lastOperator);

            lastOperator = this.textContent;
            history.textContent = total + " " + lastOperator;
            display.textContent = "";

            break;

        case "plus-btn":
            if (display.textContent.length < 1) break;
            if (lastOperator.length < 1) lastOperator = "+";
            total == ""
                ? (total = Number(display.textContent))
                : calculateTotal(lastOperator);

            lastOperator = this.textContent;
            history.textContent = total + " " + lastOperator;
            display.textContent = "";

            break;

        case "decimal-btn":
            break;

        case "equal-btn":
            calculateTotal(lastOperator);
            lastOperator = "";
            history.textContent = total;
            display.textContent = "";
            break;

        case "extra-btn":
            console.log("Extra Button");
            break;

        default:
            break;
    }

    // Finish the function in case the number has more than 14 digits
    if (display.textContent.length > 14) return;

    if (this.classList.contains("digit-btn")) {
        display.textContent += this.textContent;
    }
}

function calculateTotal(operator) {
    switch (operator) {
        case "+":
            total += Number(display.textContent);
            break;

        case "-":
            total -= Number(display.textContent);
            break;

        case "X":
            total *= Number(display.textContent);
            break;

        case "/":
            if (display.textContent == "0") {
                history.textContent = "Error";
            } else {
                total /= Number(display.textContent);
            }
            break;

        default:
            break;
    }
}
