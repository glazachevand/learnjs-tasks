function debounce(f, ms) {
  let isCooldown = false;

  return function () {
    if (isCooldown) return;

    f.apply(this, arguments);
    isCooldown = true;

    setTimeout(() => (isCooldown = false), ms);
  };
}

let f = debounce(console.log, 1000);

f(1); 
f(2); 

setTimeout(() => f(3), 100);
setTimeout(() => f(4), 1100);
setTimeout(() => f(5), 1500);
setTimeout(() => f(6), 2500);
setTimeout(() => f(7), 4000);