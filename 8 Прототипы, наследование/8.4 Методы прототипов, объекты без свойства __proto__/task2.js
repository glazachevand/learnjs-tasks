function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function () {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();  // "Rabbit". Относится к потомку
Rabbit.prototype.sayHi(); // undefined. this  равен прототипу
Object.getPrototypeOf(rabbit).sayHi();// undefined. this  прототипу
rabbit.__proto__.sayHi();// undefined. this  равен прототипу