const container = document.querySelector(".container");

function createbox (numBoxes) {
    for (i=0; i<numBoxes; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box)
    }
}

createbox(16)