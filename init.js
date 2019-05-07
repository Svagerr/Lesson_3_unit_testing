function calculate(a, b){
    if(a < 0 || b > 10500 || isNaN(a) || isNaN(b) || (a+b) > 999999){
        return false;
       }
    return a + b;
}

function multiply(a, b){
    if(a < 0 || b > 999999 || a > 999999 || b < 0 || isNaN(a) || isNaN(b) || (a*b) > 999999){
        return false;
    }
    return a * b;
}


function minus(a, b){
    if(a < -999999 || b > 999999 || a > 999999 || b < -999999 || isNaN(a) || isNaN(b) || (a-b) < -999999 || (a-b) > 999999){
        return false;
    }
    return a - b;
}

function division(a, b){
    if(a < -999999 || b > 999999 || a > 999999 || b < -999999 || isNaN(a) || isNaN(b) || b === 0 || (a / b) > 999999 || (a / b) < -999999){
        return false;
    }
    return a / b;
}