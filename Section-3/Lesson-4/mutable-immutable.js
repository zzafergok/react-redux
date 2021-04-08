//mutable (değişebilir)
const data = { name: "zafer" };
const data2 = data;

data2.name = "saim";

console.log("data", data);
console.log("data2", data2);

//immutable (değişmez)
const obj = { name: "zafer" };
const obj2 = Object.assign({}, obj);

obj2.name = "saim";

console.log("obj", obj);
console.log("obj2", obj2);

// iç içe objelerde ise farklı bir yol işliyoruz
const value = {
  info: {
    name: "zafer",
    surname: "test",
  },
};

const value2 = JSON.parse(JSON.stringify(value));

value2.info.name = "saim";

console.log("value", value);
console.log("value2", value2);
