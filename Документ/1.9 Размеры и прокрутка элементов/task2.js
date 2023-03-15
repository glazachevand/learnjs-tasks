let div = document.createElement('div');
div.style.overflowY = 'scroll';
div.style.width = '500px';
div.style.height = '500px';
document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;
console.log(scrollWidth); // 17