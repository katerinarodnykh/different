/* Одноуровневое мобильное меню */

var hamburger = document.querySelector(".header__hamburger");
var navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", function (evt) {
    evt.preventDefault();
    hamburger.classList.toggle("open");
    navigation.classList.toggle("open");
});
