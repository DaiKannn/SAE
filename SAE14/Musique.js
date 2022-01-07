function musique(){
    popupdiv.classList.add("popup");
    popupdiv.id="popup";
    document.body.prepend(popupdiv);
    let element = document.getElementById("popup");
    element.addEventListener("click", onclick);
    let audio = new Audio('slamdunk.mp3');
    audio.play();
}

function onclick(){
    let element = document.getElementById("popup");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
        let audio = new Audio('slamdunk.mp3');
        audio.play();
        var delayInMilliseconds = 8000;
    }
}