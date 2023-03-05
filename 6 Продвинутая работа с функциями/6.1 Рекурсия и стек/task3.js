function fib(n) {
  if (n <= 2) return 1;

  let num;
  let num1 = 1;
  let num2 = 1;

  for (let i = 3; i <= n; i++) {
    num = num1 + num2;
    num1 = num2;
    num2 = num;
  }
  return num;
}
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(7));
console.log(fib(77));