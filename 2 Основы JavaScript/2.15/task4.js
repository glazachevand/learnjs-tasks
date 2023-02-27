function pow(x, n) {
  return x ** n;
}

let x = prompt('x', '');
let n = prompt('n', '');

n < 1 ? alert(`n должно быть > 1`) : alert(pow(x, n));