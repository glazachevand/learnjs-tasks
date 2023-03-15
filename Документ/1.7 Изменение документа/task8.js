function clockStart() {
  if (!timerId) {
    timerId = setInterval(inputTime, 1000);
  }
  inputTime();
}

function clockStop() {
  clearInterval(timerId);
  timerId = null;
}

function inputTime() {
  now = new Date();
  hh = now.getHours().toString().padStart(2, '0');
  mm = now.getMinutes().toString().padStart(2, '0');
  ss = now.getSeconds().toString().padStart(2, '0');
  document.querySelector('.hour').textContent = hh;
  document.querySelector('.min').textContent = mm;
  document.querySelector('.sec').textContent = ss;
}

let now = new Date();
let hh = now.getHours().toString().padStart(2, '0');
let mm = now.getMinutes().toString().padStart(2, '0');
let ss = now.getSeconds().toString().padStart(2, '0');
let timerId;

let firstInput = document.querySelector('input');
firstInput.insertAdjacentHTML(
  'beforebegin',
  `<div id="clock"><span class="hour">${hh}</span>:<span class="min">${mm}</span>:<span class="sec">${ss}</span></div>`,
);