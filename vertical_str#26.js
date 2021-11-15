function showVerticalMessage(str) {
  let result = "";

  function truncate(str) {
    return str.length > 10 ? (str = str.slice(0, 10)) : str;
  }

  function toUpperCaseFirstSymbol(str) {
    return (str[0] = "м") ? str[0].toUpperCase() + str.slice(1) : str;
  }

  function newLine(str) {
    for (let i = 0; i < str.length; i++) {
      result += str[i] + "\n";
    }
    return result;
  }

  return newLine(toUpperCaseFirstSymbol(truncate(str)));
}

console.log(showVerticalMessage("марафончики"));

// const pipe =
//   (...fns) =>
//   (x) =>
//     fns.reduce((v, f) => f(v), x);

// return pipe(truncate, toUpperCaseFirstSymbol, newLine)(str);
