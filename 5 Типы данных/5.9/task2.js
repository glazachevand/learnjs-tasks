function count(user) {
  return Object.keys(user).length;
}

let user = {
  name: 'John',
  age: 30,
};

alert(count(user)); // 2