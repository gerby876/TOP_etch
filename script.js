const container = document.querySelector(".container");
const row = document.querySelector("row")

const button = document.createElement("button")
button.textContent = "New Grid"
button.addEventListener("click", () => {
   let numBoxes =  prompt("Enter grid size", 4);
   creategrid(numBoxes)
})
container.appendChild(button)

function creategrid(numBoxes) {
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
