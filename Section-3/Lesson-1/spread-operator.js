const data = [1, 2, 3, 4, 5];

const newData = [0, ...data];

console.log("newData : ", ...newData);

const user = {
  name: "zafer",
  surname: "test",
};

const newUser = {
  age: 25,
  ...user,
};

console.log("user : ", newUser);
