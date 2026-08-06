let nums = [1, 2, 3, 4, 5];

const double = nums.map(n => n*2);
console.log(double);

const evens = nums.filter(n => n % 2 === 0);
console.log(evens);

const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum);

// Why acc -> accumulator, n -> current value, 0 -> initial value of accumulator

const name = ["Harnoor", "John", "Jane"];
const marks = [23, 56, 78];

const mNew = marks.filter(n => n >= 40);
console.log(mNew);


