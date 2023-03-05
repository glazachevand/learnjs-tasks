function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function f(x) {
  alert(x);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 5000);

f1000('test');
f1500('test');