function element_with_class_and_text(tag, className, content) {
    var element = document.createElement(tag);
    element.className = className;
    element.innerText = content;
    return element;
}

function switchMode() {
    var element = document.body;
    element.classList.toggle("light-mode");
    if (element.classList.contains("light-mode") && !(document.cookie.indexOf("lightmode=1") >= 0)) {
        document.cookie = "lightmode=1"
        console.log("Adding lightmode!")
    } else if (!element.classList.contains("light-mode")) {
        document.cookie = "lightmode=0"
        console.log("Deleting lightmode!")
    }
}


if(document.cookie.indexOf("lightmode=1") >= 0) {
    switchMode()
    console.log("Initial Switch lightmode!")
}

// Make sure the switchMode above does not trigger the transition
setTimeout(function () {
    console.log("h");
    document.body.classList.add("animate-color");
}, 10);

