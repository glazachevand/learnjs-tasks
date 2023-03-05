function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

//---------------------------------------------

function sumTo(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sumTo(n - 1);
  }
}

//---------------------------------------------

function sumTo(n) {
  return (n * (1 + n)) / 2;
}

//---------------------------------------------
console.log(sumTo(1));
console.log(sumTo(2));
console.log(sumTo(3));
console.log(sumTo(100));