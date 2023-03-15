showNotification({
  top: 10, // 10px от верхней границы окна (по умолчанию 0px)
  right: 10, // 10px от правого края окна (по умолчанию 0px)
  html: 'Hello!', // HTML-уведомление
  className: 'welcome', // дополнительный класс для div (необязательно)
});

function showNotification(options) {
  let notification = document.createElement('DIV');
  notification.style.top = options.top + 'px';
  notification.style.right = options.right + 'px';

  if (options.className) {
    notification.classList.add(options.className);
  }

  notification.classList.add('notification');
  notification.innerHTML = options.html;
  document.body.prepend(notification);
  setTimeout(() => {
    notification.remove();
  }, 1500);
}