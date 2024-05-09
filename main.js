var menu = document.getElementById("menu")
var content = document.getElementById("menu-content-display");
var cancle = document.getElementById("cancle");
var darkBtn = document.getElementById("dark");
var darkBtn2 = document.getElementById("dark2");

darkBtn.addEventListener('click', function (e) {
    document.body.classList.toggle("body2");
    e.preventDefault();
});
darkBtn2.addEventListener('click', function (e) {
    document.body.classList.toggle("body2");
    e.preventDefault();
});
menu.addEventListener('click', function (e) {
    content.classList.toggle('on-mobile');
    e.preventDefault();
});
cancle.addEventListener('click', function (e) {
    content.classList.add('on-mobile');
    e.preventDefault();
});

