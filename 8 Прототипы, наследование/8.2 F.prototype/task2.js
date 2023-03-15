// 1
function Rabbit(name) {
  this.name = name
}

let obj = new Rabbit('white');
alert(obj.name);
let obj2 = new obj.constructor('black');
alert(obj2.name);

// 2
function Rabbit(name) {
  this.name = name
}

Rabbit.prototype = {};

let obj = new Rabbit('white');
alert(obj.name);
let obj2 = new obj.constructor('black');
alert(obj2.name);
