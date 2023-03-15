function createCalendar(elem, year, month) {
  let table = document.createElement('table');
  let d = new Date(year, month - 1);

  table.insertAdjacentHTML(
    'beforeend',
    '<thead><tr><th>пн.</th><th>вт.</th><th>ср.</th><th>чт.</th><th>пт.</th><th>сб.</th><th>вс.</th></tr></thead>',
  );

  let tbody = document.createElement('tbody');
  table.append(tbody);

  let tr = document.createElement('tr');
  tr.innerHTML = '<td></td><td></td><td></td><td></td><td></td><td></td><td></td>';

  tbody.append(tr);

  while (d.getMonth() == month - 1) {
    let week = d.getDay() - 1;
    if (week < 0) {
      week = 6;
    }
    tr.cells[week].textContent = d.getDate();

    if (week % 7 == 6) {
      tr = document.createElement('tr');
      tr.innerHTML = '<td></td><td></td><td></td><td></td><td></td><td></td><td></td>';
      tbody.append(tr);
    }
    d.setDate(d.getDate() + 1);
  }
  calendar.append(table);
}

createCalendar(calendar, 2023, 2);