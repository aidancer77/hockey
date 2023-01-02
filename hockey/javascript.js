//присвоение переменной элемента текст
const text = document.querySelector('.rotate_txt');
//разбивка текста на буквы
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

let element = document.querySelectorAll('span');
for (let i = 0; i < element.length; i++) {
    element[i].style.transform = "rotate(" + i * 10.6 + "deg)";
}

var timer, nPos = 0,
    stop = false;

function anistop() {
    stop = true
}
function anirun() {
    start()
}
function start() {
    stop = false;
    timer && window.clearInterval(timer);
    document.getElementsByClassName(".rectangle_rotate");
    var a = document.getElementsByClassName(".rect_rotate"),
        c = a.offsetWidth;
    timer = setTimeout(function () {
        a.style.left = nPos + "px";
        nPos -= 2;
        if (nPos < -c) nPos = 0;
        stop || setTimeout(arguments.callee, 25)
    }, 10)
}
window.onload = start;
