const form = document.querySelector("form");
const numberBank = document.querySelector("#numberBank output");
const number = document.getElementById("number");

const oddsOutput = document.querySelector("#odds output");
const evensOutput = document.querySelector("#evens output");
const sortOne = document.getElementById("sortOne");
const sortAll = document.getElementById("sortAll");

let numBank = [];
let evens = [];
let odds = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = new FormData(event.target);
  numBank.push(data.get("number"));
  renderNumberBank();
});

//if number has a remainder of 2, it is even
const checkEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

sortOne.addEventListener("click", function (event) {
  const num = numBank.shift(); // shift is taking the first number in the numberBank and running it through the function.
  const value = checkEven(num);

  //if the value of the number from the number bank is even, push to the even array, if not, push to odds.
  if (value === true) {
    evens.push(num);
  } else {
    odds.push(num);
  }
  main();
});

//performs 'while loop' while array length is greater than zero
//using a for loop kept the numbers in the bank, this allowed me to move the numbers from numBank to corresponding Odds/Evens
sortAll.addEventListener("click", function (event) {
  while (numBank.length > 0) {
    const num = numBank.shift();
    if (checkEven(num)) {
      evens.push(num);
    } else {
      odds.push(num);
    }
  }
  main();
});

const renderNumberBank = () => {
  numberBank.textContent = numBank;
};
const renderEvenArr = () => {
  evensOutput.textContent = evens;
};
const renderOddsArr = () => {
  oddsOutput.textContent = odds;
};

const main = () => {
  renderNumberBank();
  renderEvenArr();
  renderOddsArr();
};
