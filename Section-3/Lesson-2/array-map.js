const numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 2];

const newArr = numbers.map((number) => number + 1);

console.log("newArr : ", ...newArr);
