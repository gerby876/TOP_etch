const container = document.querySelector(".container");

function creategrid(numBoxes) {
    
}

function createrow (numBoxes) {
    for (i=0; i<numBoxes; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
    }
}

function createbox (numBoxes) {
    for (i=0; i<numBoxes; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
       row.appendChild(box);
    }
}


createrow(8)
