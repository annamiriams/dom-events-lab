/*

As a user, I want to be able to select numbers so that I can perform operations with them.
As a user, I want to be able to add two numbers together.
As a user, I want to be able to subtract one number from another.
As a user, I want to be able to multiply two numbers together.
As a user, I want to be able to divide one number by another.
As a user, I want to be able to see the output of the mathematical operation.
As a user, I want to be able to clear all operations and start from 0.

*/

/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let equalsWasClicked = false;
let operatorWasClicked = false;

/*------------------------ Cached Element References ------------------------*/

const display = document.querySelector('div.display');
const buttons = document.querySelectorAll('.button');

/*----------------------------- Event Listeners -----------------------------*/

// I definitely think there's a way to simplify this code block so that the functions called are called in a separate function rather than in here (similar to the rock, paper, scissors lab). But I got this to work, and I'm happy with that (for now). 

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const buttonValue = button.innerText;
        if (buttonValue === 'C') {
            operatorWasClicked = false;
            clearDisplay();
        }
        else if (buttonValue === '=') {
            operatorWasClicked = false;
            calculateTotal();
        }
        else if (buttonValue === '/') {
            concatVal(buttonValue);
            operatorWasClicked = true;
        }
        else if (buttonValue === '*') {
            concatVal(buttonValue);
            operatorWasClicked = true;
        } 
        else if (buttonValue === '-') {
            concatVal(buttonValue);
            operatorWasClicked = true;
        } 
        else if (buttonValue === '+') {
            concatVal(buttonValue);
            operatorWasClicked = true;
        }
        else { // it's a number
            operatorWasClicked = false;
            concatVal(buttonValue); 
        };
    });
});

/*-------------------------------- Functions --------------------------------*/

// I wanted the value below 'btnValue' to be different from the above 'buttonValue' but was having trouble coming up with something that was equally descriptive, since both are really referring to the same thing. 
const concatVal = (btnValue) => {
    if (equalsWasClicked === true) {
        display.textContent = '';
        equalsWasClicked = false;
    };
    if (operatorWasClicked === false) {
        display.textContent += btnValue;
    };
};

const clearDisplay = () => {
    display.textContent = '';
}

const calculateTotal = () => {
    display.textContent = eval(display.textContent);
    equalsWasClicked = true;
};