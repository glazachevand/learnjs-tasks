/**
 * Позиционирует элемент elem относительно элемента anchor в соответствии со значением position.
 *
 * @param {Node} anchor     элемент, около которого позиционируется другой элемент
 * @param {string} position одно из: top/right/bottom
 * @param {Node} elem       элемент, который позиционируется
 *
 * Оба элемента elem и anchor должны присутствовать в документе
 */
function positionAt(anchor, position, elem) {
  let coords = getCoords(anchor);

  switch (position) {
    case 'top':
      elem.style.left = coords.left + 'px';
      elem.style.top = coords.top - elem.offsetHeight + 'px';
      break;
    case 'right':
      elem.style.left = coords.left + anchor.offsetWidth + 'px';
      elem.style.top = coords.top + 'px';
      break;
    case 'bottom':
      elem.style.left = coords.left + 'px';
      elem.style.top = coords.top + anchor.offsetHeight + 'px';
      break;

    default:
      break;
  }
}

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    left: box.left + window.pageXOffset,
  };
}

function showNote(anchor, position, html) {
  document.body.style.height = '2000px';
  let note = document.createElement('div');
  note.className = 'note';
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector('blockquote');

showNote(blockquote, 'top', 'note above');
showNote(blockquote, 'right', 'note at the right');
showNote(blockquote, 'bottom', 'note below');
