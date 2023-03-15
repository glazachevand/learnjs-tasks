let lis = document.querySelectorAll('li');

for (const li of lis) {
  let countLi = li.querySelectorAll('li').length;

  if (countLi > 0) {
    li.firstChild.data += `[${countLi}]`;
  }
}