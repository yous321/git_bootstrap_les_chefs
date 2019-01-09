function cacher() {
    document.querySelector('.lalala').classList.add("lalala2");
}
function toggle() {
    document.querySelector('.lalala').classList.remove("lalala2");
}

document.getElementById('cache').addEventListener('click', toggle)
document.getElementById('cache2').addEventListener('click', cacher)
document.getElementById('cache3').addEventListener('click', cacher)



let pollution = document.querySelector(".effacer");
let video = document.querySelector(".videos");
let dessin = document.querySelector("#dessin");

pollution.addEventListener("click", () => {
    if (video.classList.contains("visible")) {
        video.classList.remove("visible");
        video.classList.add("invisible");
        dessin.classList.remove("visible");
        dessin.classList.add("invisible");
    } else {
        video.classList.remove("invisible");
        video.classList.add("visible");
        dessin.classList.remove("invisible");
        dessin.classList.add("visible");
    }
}); exe