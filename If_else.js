

/*
if(expression) {
    // code associated with the if block
    // will only be executed if the expression is true
}
else {
    // code associated with the else block
    // we don't need an else block, it is optional
    // this code will only be executed if the expression is false
}
*/

let rain = true;


if (rain) {
    console.log("** Taking my umbrella when I need to go outside **");
} else {
    console.log("** I can leave my umbrella at home **");
}


let order = false;

console.log(order)
if (order) {
    console.log("Go for the delivery .")
}
else {
    console.log("Cancel Delivery ")
}


// Switch Case 
let activity = "Get up";

switch (activity) {
    case "Get up":
        console.log("It is 6:30AM");
        break;
    case "Breakfast":
        console.log("It is 7:00AM");
        break;
    case "Drive to work":
        console.log("It is 8:00AM");
        break;
    case "Lunch":
        console.log("It is 12:00PM");
        break;
    case "Drive home":
        console.log("It is 5:00PM");
        break;
    case "Dinner":
        console.log("It is 6:30PM");
        break;
}

