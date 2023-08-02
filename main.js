let history = document.getElementById("history");
let display = document.getElementById("display");

let total = ""; //keeps the last input value or the last calculated value
let lastOperator = "";
let stateError = false;

const buttonsArray = [...document.querySelectorAll("button")];

buttonsArray.forEach((btn) => {
    btn.addEventListener("click", updateDisplay);
});

function updateDisplay() {
    //Function buttons functionalities
    switch (this.id) {
        case "ac-btn":
            activateAllButtons();
            history.textContent = "";
            display.textContent = "";
            total = "";
            break;

        case "del-btn":
            if (display.textContent.length > 0)
                display.textContent = display.textContent.slice(0, -1);
            break;

        case "percent-btn":
            if (display.textContent.length < 1 && history.textContent == "")
                break;
            calculatePercentage();
            break;

        case "divide-btn":
            if (display.textContent.length < 1 && history.textContent == "")
                break;
            cleanAndCallUpdate();
            lastOperator = this.textContent;
            history.textContent = total + " " + lastOperator;

            break;

        case "mult-btn":
            if (display.textContent.length < 1 && history.textContent == "")
                break;
            cleanAndCallUpdate();
            lastOperator = this.textContent;
            history.textContent = total + " " + lastOperator;

            break;

        case "minus-btn":
            if (display.textContent.length < 1 && history.textContent == "")
                break;
            cleanAndCallUpdate();
            lastOperator = this.textContent;
            history.textContent = total + " " + lastOperator;

            break;

        case "plus-btn":
            if (display.textContent.length < 1 && history.textContent == "")
                break;
            cleanAndCallUpdate();
            lastOperator = this.textContent;
            history.textContent = total + " " + lastOperator;

            break;

        case "decimal-btn":
            if (display.textContent.includes(".")) {
                break;
            } else {
                display.textContent.length < 1
                    ? (display.textContent = "0.")
                    : (display.textContent += ".");
            }

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

    // Do not permit to write more than 14 digits in order to keep the values
    // within the display screen.
    if (display.textContent.length > 14) return;

    // used to write (concatenate) numbers
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
                total = "Error: #DIV/0!";
                stateError = true;
            } else {
                total /= Number(display.textContent);
            }
            break;

        default:
            display.textContent.length < 1
                ? (total = Number(history.textContent))
                : (total = Number(display.textContent));
            break;
    }

    if (stateError) deactivateButtons("ac-btn");
}

function cleanAndCallUpdate() {
    /**
     * Auxiliary function to avoid repeating this code within updateDisplay()
     */
    if (lastOperator == "" && display.textContent == "") {
        total = Number(history.textContent);
    } else if (lastOperator == "") total = Number(display.textContent);

    total == ""
        ? display.textContent == ""
            ? (total = "")
            : (total = Number(display.textContent))
        : calculateTotal(lastOperator);
    display.textContent = "";
}

function calculatePercentage() {
    if (lastOperator == "+" || lastOperator == "-") {
        history.textContent = (total / 100) * Number(display.textContent);
        display.textContent = "";
    } else {
        display.textContent = Number(display.textContent) / 100;
    }
}

function deactivateButtons(exception) {
    buttonsArray.forEach((btn) => {
        if (btn.id !== exception) {
            btn.disabled = true;
        }
    });
}

function activateAllButtons() {
    buttonsArray.forEach((btn) => {
        btn.disabled = false;
    });

    stateError = false;
}
