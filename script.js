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

randomColorBtn.addEventListener("click", () => {
  randomizeGridRGB();
});

resetGridBtn.addEventListener("click", () => {
  gridContainer.innerHTML = "";
});
function showGrids(gridSize) {
  const gridPixels = 696 / gridSize; // 700px (grid container width) - 2*2px(grid container border size) = 696px

  for (let i = 0; i < gridSize * gridSize; i++) {
    const grid = document.createElement("div");
    grid.style.border = "1px solid #c5c3c6";
    grid.style.width = `${gridPixels}px`;
    grid.style.height = `${gridPixels}px`;

    grid.addEventListener("mouseover", () => {
      let currentOpacity = parseFloat(grid.style.opacity);
      if (isNaN(currentOpacity)) {
        grid.style.opacity = 0;
      }
      currentOpacity = parseFloat(grid.style.opacity);
      const newOpacity = currentOpacity + 0.1;
      grid.style.opacity = newOpacity;
      grid.style.backgroundColor = "grey";
    });

    gridContainer.appendChild(grid);
  }
}

function randomizeGridRGB() {
  const grids = gridContainer.children;

  for (let i = 0; i < grids.length; i++) {
    grids[i].addEventListener("mouseover", () => {
      grids[i].style.backgroundColor = `
        rgb(${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)})`;
    });
  }
}
