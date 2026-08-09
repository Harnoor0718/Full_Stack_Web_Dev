// Conditionals and Loops

let age = 25;

if(age >= 18) {
    console.log("You are an adult.");
} else if (age >= 13) {
    console.log("You are a teenager.");
} else {
    console.log("You are a child.");
}


// switch statement
switch(3){
    case 1: console.log("One"); break;
    case 2: console.log("Two"); break;
    case 3: console.log("Three"); break;
    default: console.log("Not a valid number");
}


let no = 3;
if(no % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

// Prime no
let num = 23;
if(num <= 1){
    console.log("Not a prime number");
} 

for(let i = 2; i < num; i++){
    if(num % i === 0){
        console.log("Not a prime number");
        break;
    } else {
        console.log("Prime number");
        break;
    }
}

let arr = [1, 2, 3, 4, 5];
// for of loop
for(const a of arr){
    console.log(a);
}

const obj = {
    name: "Harnoor",
    age: 24,
    isStudent: true
};

for(const key in obj){
    console.log(key, obj[key]);
}

let s = 5;
switch(s){
    case 0: console.log("Monday"); break;
    case 1: console.log("Tuesday"); break;
    case 2: console.log("Wednesday"); break;
    case 3: console.log("Thursday"); break;
    case 4: console.log("Friday"); break;
    case 5: console.log("Saturday"); break;
    case 6: console.log("Sunday"); break;
}