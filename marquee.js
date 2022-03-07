window.onload = function() {
  var oQuotes = document.querySelector('#quotes-container ul.quotes');

  /* Функция дублирования пунктов */
  function fDoublingQuotes() {
    let nElem = oQuotes.children.length;
    for (let i = 0; i < nElem; i++) {
      oQuotes.appendChild(oQuotes.children[i].cloneNode(true));
    }
    oQuotes.style.animationDuration = '1s,' + (nElem * 2) + 's';
  }

  /* Функция для изменения значений пунктов */
  function fSetQuote(sId, sClass, sBid, sAsk) {
    let aQuotes = oQuotes.querySelectorAll('li[data-curr="' + sId + '"]');
    aQuotes.forEach(function(item) {
      item.className = sClass || item.className;
      item.children[0].innerText = sBid || item.children[0].innerText;
      item.children[1].innerText = sAsk || item.children[1].innerText;
    });
  }

  document.querySelector('button').addEventListener('click', function() {
    fSetQuote('Ripple', '', '0', '1');
  });

  fDoublingQuotes();
}
