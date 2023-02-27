function Calculator() {
  let obj = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };

  this.calculate = function (str) {
    let arr = str.split(' ');
    let a = +arr[0];
    let op = arr[1];
    let b = +arr[2];

    if (!obj[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return obj[op](a, b);
  };

  this.addMethod = function (name, func) {
    obj[name] = func;
  };
}

let calc = new Calculator();
alert(calc.calculate('3 + 7'));

let powerCalc = new Calculator();
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);
let result = powerCalc.calculate('2 ** 3');
let result2 = powerCalc.calculate('2 / 3');
alert(result2);
alert(result);