






















// Language Specific Code
let string = '1,2,3\nl5;6[[5=6'
const regex = /(-?\d+)/g

const stringCalculator = () => {
  let sum = 0;
  const digits = string.match(regex);
  digits.forEach(num => {
    sum += parseInt(num);
  });
  return sum;
}