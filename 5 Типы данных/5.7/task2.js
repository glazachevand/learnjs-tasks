function aclean(arr) {
  let res = [];
  const map = new Map();
  let sortItem;

  for (const item of arr) {
    sortItem = item.toLowerCase().split('').sort().join('');
    map.set(sortItem, item);
  }
  return Array.from(map.values());
}

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
alert(aclean(arr));