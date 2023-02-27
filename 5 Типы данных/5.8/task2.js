let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

let read = new WeakMap();
read.set(messages[0], new Date());
read.set(messages[1], new Date());

console.log(read);
console.log('прочитано сообщение 0: ', read.has(messages[0]));
messages.shift();
console.log(messages);
console.log(read);
setTimeout(() => {
  console.log(read);
}, 10000);