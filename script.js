function add(numbers){
    return numbers.reduce((total, number)=>{
        return total += number;
    }, 0);
}

function subtract(numbers){
    return numbers[0] - numbers[1]
}

function multiply(numbers){
    return numbers.reduce((total, number)=>{
        return total *= number;
    }, 1);
}

function divide(numbers){
    return numbers[0] / numbers[1];
}
//-------------------------------------------------------------//
