function throttle(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

let f1000 = throttle(console.log, 1000);

f1000(1);
f1000(2);
setTimeout(() => f1000(3), 100);
f1000(4);
f1000(5);
setTimeout(() => f1000(6), 2000);