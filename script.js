
let container = document.querySelector(".container");

for (let i = 0; i < 16 * 16; i++) {
    let grid = document.createElement("div");
    grid.classList.add("grid");
    grid.textContent = i + 1;
    container.appendChild(grid);
}
