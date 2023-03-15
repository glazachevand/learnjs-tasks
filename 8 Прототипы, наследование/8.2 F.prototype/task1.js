function Rabbit() { }
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

// 1
Rabbit.prototype = {};
alert(rabbit.eats); // true

// 2
Rabbit.prototype.eats = false;
alert(rabbit.eats); // false

// 3
delete rabbit.eats;
alert(rabbit.eats); // true

// 4
delete Rabbit.prototype.eats;
alert(rabbit.eats); // undefined