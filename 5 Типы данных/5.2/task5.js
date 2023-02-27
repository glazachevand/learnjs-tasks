function random(min, max) {
  let r = Math.random(0, 1);
  return (max - min) * r + min;
}

alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));