Function.prototype.defer = function (ms) {
  return (...args) => setTimeout(this, ms, ...args);
}

function f(a, b, c) {
  alert(a + b + c);
}

f.defer(1000)(1, 2, 3); // 6