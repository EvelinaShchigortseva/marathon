function calc(operation, arg1, arg2) {
  let result;

  if (
    typeof arg1 == "number" && !isNaN(arg1) &&typeof arg2 == "number" &&!isNaN(arg2)
  ) {
    switch (operation) {

      case "add":
        result = arg1 + arg2;
        break;

      case "div":
        if (arg2 == 0) {
          console.log("error arg");
        } else {
          result = arg1 / arg2;
        }
        break;
      case "sub":
        result = arg1 - arg2;
        break;

      case "multi":
        result = arg1 * arg2;
        break;

      case "power":
        result = arg1 ** arg2;
        break;

      case "mod":
        result = arg1 % arg2;
        break;

      default:
        console.log("there isn't math operation");
    }

    console.log(result);

  } else {
    console.log("error in arguments");
  }
}

calc("add", NaN, 2);
calc("div", 10, 2);
calc("sub", 10, 2);
calc("multi", 10, 2);
calc("power", 10, 2);
calc("mod", 10, 2);
calc("add", 2);
calc("addhh", 1, 2);
calc("add", "1", 2);
