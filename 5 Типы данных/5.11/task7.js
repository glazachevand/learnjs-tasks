function getSecondsToTomorrow() {
  let now = new Date();
  let next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  return Math.round((next - now) / 1000);
}

alert(getSecondsToTomorrow());