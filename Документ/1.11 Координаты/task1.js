const field = document.querySelector('#field');
const rect = field.getBoundingClientRect();
console.log(rect.left, rect.top);
console.log(rect.right, rect.bottom);
console.log(rect.left + field.clientLeft, rect.top + field.clientTop);
console.log(rect.left + field.clientLeft + field.clientWidth, rect.top + field.clientTop + field.clientHeight);