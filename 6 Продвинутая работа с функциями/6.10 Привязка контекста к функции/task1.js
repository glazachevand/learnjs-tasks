//'use strict';
function f() {
  alert(this); // ?
}

let user = {
  g: f.bind(null),
};

user.g();
// null в строгом режиме и window в нестрогом