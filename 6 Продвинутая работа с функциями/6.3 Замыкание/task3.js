//'use strict';
let phrase = 'Hello';

if (true) {
  let user = 'John';

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();

// Hello, John - если нет строго режима, ошибка иначе