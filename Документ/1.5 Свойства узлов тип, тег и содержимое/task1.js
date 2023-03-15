let ul = document.getElementsByTagName('ul')[0];
for (let li of ul.getElementsByTagName('li')) {
  let title = li.firstChild.data;
  title = title.trim();
  let count = li.getElementsByTagName('li').length;
  console.log(title + ': ' + count);
}
