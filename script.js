//basic math
function add(number1, number2){
    return number1 + number2;
}

function subtract(number1, number2){
    return number1 - number2;
}

function multiply(number1, number2){
    return number1 * number2;
}

function divide(number1, number2){
    return number1 / number2;
}

//Operate

function operate(operator, number1, number2){
    let result;

    switch(operator){
        case '+':
            result = add(number1, number2);
            break;
        case '-':
            result = subtract(number1, number2);
            break;
        case '*':
            result = multiply(number1, number2);
            break;
        case '/':
            result = divide(number1, number2);
            break;
        default:
            result = 'No valid operator';
    }

    return result;
}

//verify that there is a decimal point '.' in the display and if the button pressed is a '.' 
function validateDecimalPoint(display, number){
    return display.textContent.includes('.') && number === '.';
}

function validateZeros(display, number){
    return display.textContent === '0' && number === '0';
}

function validateAllKeysPressed(e){

    const display = document.querySelector('.display');
    const number = this.textContent.trim();
    
    //Allow only one decimal point in the display and no more than one zero in display like '00000' or '00' 
    if(validateDecimalPoint(display, number) ||
        validateZeros(display, number)){
        return;
    }
    
    //if display is empty
    //if 0 and press another number different than 0
    if(display.textContent === '' ||
       display.textContent === '0' && number !== '0') {
        if(number === '.'){
            display.textContent = '0.'
            return;
        }
        display.textContent = number;
        return;
    }
    
    if(display.textContent.length < 20) display.textContent += number;
}

function printPressNumbers(){
    const numberButtons = document.querySelectorAll('.numbers');
    
    numberButtons.forEach(button =>{
        button.addEventListener('click', validateAllKeysPressed);
    })
}

function clearDisplay(){
    const clear = document.querySelector('.clear');
    clear.addEventListener('click', (e)=>{
        const display = document.querySelector('.display');

        display.textContent = '';
    })
}

//add eventlisteners to number buttons to print the value in the display screen
printPressNumbers();

clearDisplay();