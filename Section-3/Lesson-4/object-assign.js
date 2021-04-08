const data = { name: "zafer" };

const data2 = { surname: "saim", age: 25 };

const data3 = { age: 14 };

const result = Object.assign(data, data2, data3);

console.log("Object.assign : ", result);
