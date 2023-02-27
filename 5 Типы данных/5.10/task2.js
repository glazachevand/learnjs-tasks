function topSalary(salaries) {
  let user = null;
  let max = 0;

  for (const [key, value] of Object.entries(salaries)) {
    if (max < value) {
      user = key;
      max = value;
    }
  }
  return user;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

alert(topSalary(salaries));