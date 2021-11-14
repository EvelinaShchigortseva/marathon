function add(a, b) {
    return a + b;
}

function div(a, b) {
    return (b==0)? console.log("error arg") : a/b;
}

function multi(a,b){
   return a*b;
}

function sub(a,b) {
    return a-b;
}

function mod(a,b){
    return a%b;
}

function power(a,b) {
    return a**b;
}

function calc(operation, arg1, arg2) {

    let result;

    const operations = {
        add: add,
        div: div,
        sub: sub,
        multi: multi,
        power: power,
        mod: mod
    };
    if ( typeof arg1 == "number" && !isNaN(arg1) 
        && typeof arg2 == "number" && !isNaN(arg2)) {
        
        if(operation in operations){
            result = operations[operation](arg1,arg2)
            console.log(result);
        }
        else{
            console.log("there isn't math operation");
        }
        
    } else {
        console.log("error in arguments");
    }
}

calc("add", 7, 2);
calc("div", 10, 2);
calc("sub", 10, 2);
calc("multi", 10, 2);
calc("power", 10, 2);
calc("mod", 10, 2);
calc("add", 2);
calc("addhh", 1, 2);
calc("add", "1", 2);


// let errors = '';

// if (typeof arg1 !== 'number') errors += 'arg1 is not Number/n'
// if (typeof arg2 !== 'number') errors += 'arg2 is not Number/n'
// if (isNaN(arg1)) errors += 'arg1 is NaN/n'
// if (isNaN(arg2)) errors += 'arg2 is NaN/n'
// if (!(operation in operations)) errors += `there isn't math operation/n`

// if(!errors){
//     // code
// } else {
//     console.log(errors)
// }
