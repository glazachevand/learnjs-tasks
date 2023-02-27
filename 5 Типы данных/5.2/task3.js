function readNumber() {
  let number;

  do {
    number = prompt('Введите число');
  } while (!isFinite(number));

  if (number === null || number.trim() === '') return null;

  return +number;
}

alert(readNumber());