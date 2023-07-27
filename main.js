let display = document.getElementById("display");
let total = ""; //keeps the last input value or the last calculated value
let lastOperator = "";
let isResultDisplayed = false; //Flag to know if the numeric value comes from
    // a calculation

const buttonsArray = [...document.querySelectorAll("button")];

buttonsArray.forEach((btn) => {
    btn.addEventListener("click", updateDisplay);
});

function updateDisplay() {
    // Finish the function in case the number has more than 14 digits
    if (display.textContent.length > 14) return;

    // Numeric buttons functionality
    const digitPattern = /\D/gi; //Regex to find a non-digit character\

    if (
        this.classList.contains("digit-btn") &&
        !digitPattern.test(display.textContent) &&
        !isResultDisplayed
    ) {
        display.textContent += this.textContent;
    } else if (this.classList.contains("digit-btn")) {
        display.textContent = this.textContent;
        isResultDisplayed = false;
    }

    //Function buttons functionalities
    switch (this.id) {
        case "ac-btn":
            display.textContent = "";
            total = "";
            isResultDisplayed = false;
            break;

        case "del-btn":
            if (display.textContent.length > 0)
                display.textContent = display.textContent.slice(0, -1);
            break;

        case "percent-btn":
            break;

        case "divide-btn":
            break;

        case "mult-btn":
            break;

        case "minus-btn":
            break;

        case "plus-btn":
            if (
                typeof total == "number" &&
                Number(display.textContent) != NaN &&
                isResultDisplayed
            ) {
                display.textContent = total + Number(display.textContent);
                total = Number(display.textContent);
                isResultDisplayed = true;
            } else {
                total = Number(display.textContent);
                // display.textContent = "+";
                isResultDisplayed = true;
            }

            break;

        case "decimal-btn":
            break;

        case "equal-btn":
            break;

        case "extra-btn":
            console.log("Extra Button");
            break;

        default:
            break;
    }
}
