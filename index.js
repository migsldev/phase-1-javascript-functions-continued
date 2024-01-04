// code your solution here


//1
function saturdayFun(value = "roller-skate") {
    return `This Saturday, I want to ${value}!`


}

console.log(saturdayFun("sleep"));
console.log(saturdayFun());



//2
let mondayWork = function(value = "go to the office") {
    return `This Monday, I will ${value}.`
}
console.log(mondayWork("go to the gym"));
console.log(mondayWork());


//3
function wrapAdjective(value = "special") {
    // Return an inner function that takes an adjective as an argument
    return function(adjective) {
        // If no adjective is provided, use the default value
        adjective = adjective || value;

        // Variables encapsulated inside the inner function
        return `You are ${value}${adjective}${value}!`;
        
    };
}

// Create and call the inner function
console.log(wrapAdjective('*')("a hard worker"));
console.log(wrapAdjective('||')("a hard worker"));
console.log(wrapAdjective());
