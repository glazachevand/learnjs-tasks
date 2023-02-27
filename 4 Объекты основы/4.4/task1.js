function makeUser() {
  return {
    name: 'John',
    ref: this,
  };
}

let user = makeUser();
console.log(user);
alert(user.ref.name); // ошибка