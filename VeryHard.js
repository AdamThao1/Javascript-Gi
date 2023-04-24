//Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"

// operator input
const operator = prompt('Enter operator (+,-,*,/):');

// operand input
const num1 = parseFloat(prompt('Enter 1st number: '));
const num2 = parseFloat(prompt('Enter 2nd number: '));

let result;

if (operator == '+'){
    result = num1 + num2;
}
else if (operator == '-') {
    result = num1 - num2;
}
else if (operator == '*'){
    result = num1 - num2;
}
else {
    result = num1 / num2;
}

alert(`${num1} ${operator} ${num2} = ${result}`);



//learned that "parseFloat" converts users input to a floating-point number
//learned about the string interpolation for our results. Example: `${}`
//implemented this string interpolation to certain codes thorugh out the project
//learned what the value "const" has 
