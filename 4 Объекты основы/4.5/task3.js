function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt('number?', 0);
  };
}

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); 
accumulator.read(); 

alert(accumulator.value); // выведет сумму этих значений}