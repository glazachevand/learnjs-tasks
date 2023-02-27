function formatDate(date) {
  let now = new Date();
  let diff = now - date;

  if (diff < 1000) {
    return 'прямо сейчас';
  }

  let sec = Math.floor(diff / 1000);

  if (sec < 60) {
    return `${sec} сек. назад`;
  }

  let min = Math.floor(diff / 60000);
  if (min < 60) {
    return `${min} сек. назад`;
  }

  let dd = now.getDate().toString().padStart(2, '0');
  let mm = (now.getMonth() + 1).toString().padStart(2, '0');
  let yy = now.getFullYear().toString().slice(2);
  let hh = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  //return `DD.MM.YY HH:mm`
  return `${dd}.${mm}.${yy} ${hh}:${minutes}`;
}

alert(formatDate(new Date(new Date() - 1))); // "прямо сейчас"
alert(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"
alert(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"
// вчерашняя дата вроде 31.12.2016, 20:00
alert(formatDate(new Date(new Date() - 86400 * 1000)));