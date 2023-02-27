const n = 10;

nextNumber: for (let i = 2; i <= n; i++) {
  const sqrt = i ** (1 / 2);

  for (let j = 2; j <= sqrt; j++) {
    if (i % j === 0) {
      continue nextNumber;
    }
  }
  alert(i);
}