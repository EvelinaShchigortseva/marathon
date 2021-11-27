const operations = document.querySelectorAll(".operation");
const numbers = document.querySelectorAll(".number");
const input = document.querySelector(".input-text");

let a = 0;
let b = 0;
let operation = '';



numbers.forEach(function (item) {
  item.addEventListener("click", function () {
    input.innerHTML += item.value;
  
  });
});

operations.forEach(function (item) {
  item.addEventListener("click", function () {
    operation = item.value;
 
  });
});



// тут старый код с гита про calc)

function add(a, b) {
  return a + b;
}

function div(a, b) {
  return b == 0 ? console.log("error arg") : a / b;
}

function multi(a, b) {
  return a * b;
}

function sub(a, b) {
  return a - b;
}

// function mod(a, b) {
//   return a % b;
// }

// function power(a, b) {
//   return a ** b;
// }


function calc(operation, a, b) {
  let result;

  const operations = {
    add: add,
    div: div,
    sub: sub,
    multi: multi,
    // power: power,
    // mod: mod,
  };
//   if (typeof a == "number" && !isNaN(a) && typeof b == "number" && !isNaN(b)) {
    if (operation in operations) {
      result = operations[operation](a, b);
      console.log(result);
    } else {
      console.log("there isn't math operation");
    }
//   } else {
//     console.log("error in arguments");
//   }
return result
}
