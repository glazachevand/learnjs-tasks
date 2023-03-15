let tbody = document.querySelector('tbody');
let sortedArr = Array.from(tbody.rows);

sortedArr.sort((a, b) => (a.cells[0].innerHTML > b.cells[0].innerHTML ? 1 : -1));
tbody.append(...sortedArr);