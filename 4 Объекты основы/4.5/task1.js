const arr = [];

function A() {
  return arr;
}

function B() {
  return arr;
}

let a = new A();
let b = new B();

alert(a == b); // true