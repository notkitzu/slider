var id = 0;
var images = document.querySelectorAll('#imgs img');
// var x = images.length;
var img = document.getElementById('imgs')

function rotateoImgs() {
    id++;


    if (id >= images.length - 1) {
        id = 0;
    }

    img.style.transform = `translateX(${-id*350}px)`;

}
setInterval(rotateoImgs, 2000);