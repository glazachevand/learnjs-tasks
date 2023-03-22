function* pseudoRandom(n) {
  let previous = n;
  while (true) {
    previous = previous * 16807 % 2147483647;
    yield previous;
  }

}

let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073