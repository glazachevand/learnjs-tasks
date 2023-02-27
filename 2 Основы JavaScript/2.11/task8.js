if (-1 || 0) alert( 'first' );  // результат -1, выводится 'first'
if (-1 && 0) alert( 'second' ); // результат 0, не выводится
if (null || -1 && 1) alert( 'third' ); // результат 1, выводится 'third'