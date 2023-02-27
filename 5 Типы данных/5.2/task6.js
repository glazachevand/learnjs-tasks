function randomInteger(min, max) {
  let r = Math.random() * (max + 1 - min) + min;
  return Math.floor(r);
}

console.log(randomInteger(1, 2));
console.log(randomInteger(1, 2));
console.log(randomInteger(1, 2));
console.log(randomInteger(1, 2));
console.log(randomInteger(1, 2));
console.log(randomInteger(1, 2));