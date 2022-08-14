function add(expression){
    return expression.reduce((total, data)=>{
        return total += data;
    }, 0);
}

function subtract(expression){
    return expression[0] - expression[1]
}

function multiply(expression){
    return expression.reduce((total, data)=>{
        return total *= data;
    }, 1);
}

function divide(expression){
    return expression[0] / expression[1];
}
//-------------------------------------------------------------//
// split by operator works!
function operate(expression){
    const numbers = expression.split(' ').filter(op=>{
        return !isNaN(op);
    }).map(number =>{
        return parseFloat(number);
    });
    numbers;
    const operator = expression.split(' ').filter(op=>{
        return isNaN(op);
    }).join();

    let result;
    if(!(numbers.length === 2)) return 'Enter a valid operation'

    switch (operator){
        case '+':
            result = add(numbers);
            break;
        case '-':
            result = subtract(numbers);
            break;
        case '/':
            result = divide(numbers);
            break;
        case '*':
            result = multiply(numbers);
            break;
        default:
            result = 'Please enter a valid operator';
    }
    return result;
}

console.log(operate('23 * '))