const delay = 250;

let container = document.getElementById("container");
let gridBtn = document.querySelector(".grid-btn");
let gridAmount = 16;
let timeout;

initGrids();

gridBtn.addEventListener("click", (e) => {
    let newGridAmount = prompt("Please input new grid amount.")
    newGridAmount = Number(newGridAmount);
    if (isNaN(newGridAmount)) {
        alert("Error: grid amount, please input again.");
        return;
    }
    if (newGridAmount > 50) {
        alert("Error: grid limit 100 in a line.")
    }
    gridAmount = newGridAmount;
    initGrids();
});

window.addEventListener('resize', () => {
    clearTimeout(timeout);
    timeout = setTimeout(initGrids, delay);
});

function initGrids() {
    container.innerHTML = "";
    for (let i = 0; i < gridAmount * gridAmount; i++) {
        let grid = document.createElement("div");
        grid.classList.add("grid");
        let gridWidth = (container.clientWidth - gridAmount * 2) / gridAmount;
        grid.style.width = `${gridWidth}px`;
        grid.style.height = `${gridWidth}px`;
        container.appendChild(grid);
    }
}
