'use strict'; // variables

var anchors = document.querySelectorAll('[data-scroll]');
var openPopupBtn = document.querySelector('.actions__btn--email');
var popup = document.querySelector('.popup');
var forms = document.querySelectorAll('form');
var header = document.querySelector('.header'); // functions

var checkPageOffset = function checkPageOffset() {
  window.pageYOffset >= 100 ? header.classList.add('header--scrolled') : header.classList.remove('header--scrolled');
}; // event listeners


anchors.forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    var id = anchor.getAttribute('href');
    var block = document.querySelector(id);
    e.preventDefault();
    block.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
openPopupBtn.addEventListener('click', function () {
  openPopupBtn.classList.toggle('active');
  popup.classList.toggle('active');
});
forms.forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.querySelectorAll('input[type="text"').forEach(function (input) {
      input.value = '';
    });
    var textarea = form.querySelector('textarea');
    console.log(textarea);
    alert("\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E! ".concat(textarea.value));
  });
}); // function calls

checkPageOffset(); // window scroll

window.addEventListener('scroll', function (e) {
  checkPageOffset();
});