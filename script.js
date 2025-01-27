const container = document.querySelector(".container");

const button = document.createElement("button")
button.textContent = "New Grid"
button.addEventListener("click", () => {
    const childCount = container.childElementCount
    console.log(childCount)
    if (childCount>1) {
        removeRows(childCount)
    }
   let numBoxes =  prompt("Enter grid size", 4);
   if (numBoxes>64 || numBoxes < 1) {
    alert("Try between 1 and 64.")
} else {
   createGrid(numBoxes)}
})
container.appendChild(button)

function removeRows(childCount) {
    const rows = document.getElementsByClassName("row");
    console.log(rows)
    for (y=0; y<rows.length; y) {
        container.removeChild(container.lastChild);
    }
}

function createGrid(numBoxes) {
    for (x=0; x<numBoxes; x++) {
        const row = document.createElement("div");
        row.classList.add("row")
        container.appendChild(row)
        function createbox (numBoxes) {
            for (i=0; i<numBoxes; i++) {
                const box = document.createElement("div");
                box.classList.add("box");
                row.appendChild(box);
            }
        }
        createbox(numBoxes)
    }
}
