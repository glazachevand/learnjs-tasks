function sumInput() {
  let sum = 0;
  let arr = [];

  while (true) {
    let number = prompt('Введите число', 0);

    if (number === '' || number === null || !isFinite(number)) {
      break;
    } else {
      arr.push(+number);
    }
  }

  for (let item of arr) {
    sum += item;
  }

  return sum;
}

alert(sumInput());