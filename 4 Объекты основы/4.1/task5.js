let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

multiplyNumeric(menu);

function multiplyNumeric(obj) {
  for (const key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}