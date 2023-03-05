//-----------1 вариант--------------
function printNumbers(from, to) {
  let number = from;

  let timerId = setInterval(() => {
    if (number <= to) {
      alert(number);
      number++;
    } else {
      clearInterval(timerId);
    }
  }, 1000);
}

//--------------2 вариант-----------
function printNumbers(from, to) {
  let number = from;

  let timerId = setTimeout(function printNumber() {
    if (number <= to) {
      alert(number);
      number++;
      setTimeout(printNumber, 1000);
    } else {
      clearTimeout(timerId);
    }
  }, 1000);
}

//-------------------------------

printNumbers(5, 10);