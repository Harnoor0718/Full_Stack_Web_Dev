// Function declarations, Expressions and Arrow functions

function isPalin(n) {
    let start = 0;
    let end = n.length - 1;
    while(start < end) {
        if(n[start] != n[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}

console.log(isPalin("racecar"));

// Same function as arrow function
const isPalinArrow = (n) => {
    let start = 0;
    let end = n.length - 1;
    while(start < end) {
        if(n[start] != n[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}

console.log(isPalinArrow("racecar"));

function greet(name = "Guest"){
    return `Hello ${name}`;
}

console.log(greet("Harnoor"));
console.log(greet());
