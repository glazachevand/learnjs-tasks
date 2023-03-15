let table = document.getElementById('bagua-table');
let edit;

table.onclick = function (event) {
  let target = event.target.closest('.edit-cancel,.edit-ok,td');

  if (!table.contains(target)) return;

  if (target.className == 'edit-cancel') {
    finishTdEdit(edit.elem, false);
  } else if (target.className == 'edit-ok') {
    finishTdEdit(edit.elem, true);
  } else if (target.tagName == 'TD') {
    if (edit) return;
    makeTdEditable(target);
  }
};

function makeTdEditable(td) {
  edit = {
    elem: td,
    data: td.innerHTML,
  };

  td.classList.add('edit-td');

  let textArea = document.createElement('textarea');
  textArea.style.width = td.clientWidth + 'px';
  textArea.style.height = td.clientHeight + 'px';
  textArea.className = 'edit-area';

  textArea.value = td.innerHTML;
  td.innerHTML = '';
  td.appendChild(textArea);
  textArea.focus();

  td.insertAdjacentHTML(
    'beforeEnd',
    '<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>',
  );
}

function finishTdEdit(td, isOk) {
  if (isOk) {
    td.innerHTML = td.firstElementChild.value;
  } else {
    td.innerHTML = edit.data;
  }
  td.classList.remove('edit-td');
  edit = null;
}
