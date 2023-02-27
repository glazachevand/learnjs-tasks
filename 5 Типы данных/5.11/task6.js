function getSecondsToday() {
  let now = new Date();
  return now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds();
}

alert(getSecondsToday());