const createGridBtn = document.querySelector(".create-grid-btn");
const randomColorBtn = document.querySelector(".random-color-btn");
const resetGridBtn = document.querySelector(".reset-grid-btn");
const gridContainer = document.querySelector(".grid-container");
createGridBtn.addEventListener("click", () => {
  let gridSize = parseInt(prompt("Enter a grid size from 1 to 100"));
  if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
    alert("Please Enter a valid number between 1 to 100 as the grid size.");
  }
  showGrids(gridSize);
});

function showGrids(gridSize) {
  const gridPixels = 696 / gridSize; // 700px (grid container width) - 2*2px(grid container border size) = 696px

  for (let i = 0; i < gridSize * gridSize; i++) {
    const grid = document.createElement("div");
    grid.style.border = "1px solid #c5c3c6";
    grid.style.width = `${gridPixels}px`;
    grid.style.height = `${gridPixels}px`;

    gridContainer.appendChild(grid);
  }
}
