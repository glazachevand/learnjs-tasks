function sumSalaries(salaries) {
  let sum = 0;
  let values = Object.values(salaries);

  for (const item of values) {
    sum += item;
  }

  return sum;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

alert(sumSalaries(salaries)); // 650