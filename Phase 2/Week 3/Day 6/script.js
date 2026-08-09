// Mini Project - Data Stats Tool

function mean(numbers){
    return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}

function median(numbers){
    const sorted = [...numbers].sort((a, b) => a - b); // Meaning we are creating a copy of the array and sorting it in ascending order 
    // a- b -> ascending order
    // if b - a -> descending order
    const mid = Math.floor(sorted.length / 2);
    if(sorted.length % 2 === 0){
        return (sorted[mid - 1] + sorted[mid]) / 2;
    }
    return sorted[mid];
}


// Simple way to find the mode of an array of numbers
function mode(numbers){
    const frequency = {};
    let maxFreq = 0;
    let modes = [];

    for(const num of numbers){
        frequency[num] = (frequency[num] || 0) + 1; // meaning if the number is already in the frequency object, increment its count, otherwise set it to 1
        if(frequency[num] > maxFreq){
            maxFreq = frequency[num];
            modes = [num];
        } else if(frequency[num] === maxFreq){
            modes.push(num);
        }
    }
    return modes;
}

const data = [10, 20, 30, 40, 50, 20, 45, 44, 88, 99, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(mean(data));
console.log(median(data));
console.log(mode(data));