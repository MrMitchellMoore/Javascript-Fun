/*eslint no-unused-vars: ["error", { "vars": "local" }]*/
/*global some_unused_var */

import './styles.css';

const life = 100;
var names = 'Dev Moore';

const checked = () => {
  let checkout = false;
  if ((checkout = true)) {
    console.log(`${names} ${life}`);
  } else {
    let lifeless = life - 10;
    console.log(`${names} ${lifeless}`);
  }
};
checked();

function logger() {
  console.log('Party time');
  console.log('Party time');
  console.log('Party time');
}

logger();

function adder(num1, num2) {
  console.log(num1 + num2);
}

adder(5, 10);

const name = 'Moore';
const youTuber = 'Travis Media';

const text = '';

// Regular way
/** function upperCase(text) {
	const upCased = text.toUpperCase();
	console.log(upCased);
}
*/

// ES6 way
const toUpper = text => {
  const upCased = text.toUpperCase();
  console.log(upCased);
};

toUpper(name);
toUpper(youTuber);
