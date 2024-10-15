const calculateSum = () => {
  const result = document.getElementById('result');
  const input = document.getElementById('numberInput').value;
  try {
    const sum = add(input);
    result.innerText = sum;
  } catch (error) {
    result.innerText = error;
  }
}


// Language Agnostic Code
function add(numbers) {
  try {
    if (numbers === "") return 0;
    let regex = /^-?\d+(\.\d+)?$/
    let digitRegex = /\d/
    let digits = [];
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === '-') {
        if (numbers[i + 1] && digitRegex.test(numbers[i + 1])) {
          throw new Error(`negative numbers not allowed ${numbers[i]}${numbers[i + 1]}`)
        }
      } else if (regex.test(numbers[i])) {
        digits[digits.length] = numbers[i];
      }
    }
    digits.forEach(digit => {
      sum += parseInt(digit);
    });
    return sum;
  } catch (error) {
    throw new Error(error);
  }
}

add();



// Language Specific Code

// const stringCalculatorTwo = () => {
//   let string = '1,2,3\nl5;6[[5=6'
//   let regex = /(-?\d+)/g
//   let sum = 0;

//   const digits = string.match(regex);
//   digits.forEach(num => {
//     sum += parseInt(num);
//   });
//   return sum;
// }