let ul = document.createElement('UL');

while (true) {
  let text = prompt('введите текст', '');

  if (text === '' || text === null) break;

  let li = document.createElement('LI');
  li.textContent = text;
  ul.append(li);
}

document.body.append(ul);