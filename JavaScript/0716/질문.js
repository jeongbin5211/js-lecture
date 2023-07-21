let numbers = [1, 2, 3, 4, 5];

let add3_1 = numbers.map((x) => {x + x});
let add3_2 = numbers.map(x => x + x);

console.log(add3_1);  // undefined
console.log(add3_2);