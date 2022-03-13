// 1 hour = 60 min
function hourToMinutes (hours) {
    let result = hours * 60;
    console.log(result);
    return result;
}

let a= hourToMinutes (10);
let b= hourToMinutes (20);
let c= hourToMinutes (30);
let d= hourToMinutes (40);
let e= hourToMinutes (50);
let f= hourToMinutes (60);

//function expression, same as above but one line
let dayToHours = function (days){
    return days * 24;
};

let day = dayToHours (100);
console.log (day);

// VARIABLE DECLARATION OF SHOP

let balance = 100;
let stock = 50;
let price = 5;

function sellItem (quantity) {

    // 1. check if we have stock 
    if (quantity <= stock) {
        // 2. reduce stock, increase balance
        stock -= quantity;
        
    // balance = balance + price * quantity;
    balance += price * quantity;

    console.log ('purchase completed', balance, stock);
    }
    else{
        console.log ( 'not enough stock')
    }
}

sellItem (10);
sellItem (10);
sellItem (10);
sellItem (10);
sellItem (10);
sellItem (10);
