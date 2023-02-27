function getAverageAge(arr) {
  let sum = arr.reduce((prev, current) => prev + +current.age, 0);
  return sum / arr.length;
}

let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 29 };

let arr = [vasya, petya, masha];

alert(getAverageAge(arr));