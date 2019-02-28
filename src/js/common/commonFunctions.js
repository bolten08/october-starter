export function commonFunctions() {

  /* Fix transition */
  const trFixEls = document.getElementsByClassName('js-tr-fix');
  Array.prototype.forEach.call(trFixEls, el => {
    el.style.display = '';
  });

  document.body.classList.add('show');
}
