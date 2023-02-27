function getLocalDay(date) {
  let weekDay = date.getDay();
  return weekDay === 0 ? 7 : weekDay;
}

let date = new Date(2012, 0, 3); // 3 января 2012 года
alert(getLocalDay(date)); // вторник, нужно показать 2