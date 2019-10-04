const myAge = 32;

const yourAge = 34;

console.log(`My age is ${myAge} and your age is ${yourAge}`);
console.log(typeof myAge);

let age = 20;
// you can use > < = == === >= <= || &&
if (age >= 18) {
  console.log('you are good to go');
} else {
  console.log('you are not old enough');
}

const dice1 = 6;
const dice2 = 3;

if (dice1 === 6 && dice2 === 6) {
  console.log('you rolled doubles');
} else if (dice1 === 6 || dice2 === 6) {
  console.log('You had a good roll');
} else {
  console.log('Maybe next time you will do better');
}
