let calculator = {
  read() {
    let a = +prompt('a?', 0);
    let b = +prompt('b?', 0);
    this.a = a;
    this.b = b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());