function groupById(arr) {
  let res = arr.reduce((prev, current) => {
    prev[current.id] = current;
    return prev;
  }, {});

  return res;
}

let users = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
];

let usersById = groupById(users);
console.log(usersById);