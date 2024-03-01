// let content = document.querySelector(".click");

function modal() {
    let content = document.querySelector(".modalContent");
    if (content.style.visibility === "hidden") {
        content.style.visibility = "visible";
    } else {
        content.style.visibility = "hidden";
    }
}

document.querySelector(".btn").addEventListener("click", modal);

function close() {
    let content = document.querySelector(".modalContent");
    if (content.style.visibility === "visible") {
        content.style.visibility = "hidden";
    } else {
        content.style.visibility = "visible";
    }
}
document.querySelector(".close").addEventListener("click", close);

