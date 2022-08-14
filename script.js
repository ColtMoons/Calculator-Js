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
