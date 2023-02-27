function checkSpam(str) {
  let str1 = str.toUpperCase();

  return str1.includes('viagra'.toUpperCase()) || str1.includes('XXX');
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));