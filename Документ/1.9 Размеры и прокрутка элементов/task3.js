const ball = document.querySelector('#ball');
const field = document.querySelector('#field');
ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetWidth / 2) + 'px';
ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetHeight / 2) + 'px';