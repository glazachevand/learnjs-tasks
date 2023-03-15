let data = {
  Рыбы: {
    форель: {},
    лосось: {},
  },

  Деревья: {
    Огромные: {
      секвойя: {},
      дуб: {},
    },
    Цветковые: {
      яблоня: {},
      магнолия: {},
    },
  },
};

let container = document.getElementById('container');
createTree(container, data); // создаёт дерево в контейнере

function createTree(container, data) {
  let str = createSubTree(data);
  console.log(str);
  container.innerHTML = str;
}

function createSubTree(data) {
  let str = '';
  let ul;

  for (const key in data) {
    str += '<li>' + key + createSubTree(data[key]) + '</li>';
  }
  if (str) {
    ul = '<ul>' + str + '</ul>';
  }
  return ul || '';
}