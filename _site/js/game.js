const createGrid = (rows, cols) => {
  return new Array(rows).fill(null).map(() =>
    new Array(cols).fill(null).map(() => Math.random() > 0.5 ? 1 : 0)
  )
}

const canvas = document.getElementById("game")
const context = canvas.getContext("2d")

let width = window.innerWidth
let height = window.innerHeight

canvas.width = width
canvas.height = height

const CELL_SIZE = 10
let rows = Math.floor(height / CELL_SIZE)
let cols = Math.floor(width / CELL_SIZE)
let grid = createGrid(rows, cols)

drawGrid = () => {
  context.clearRect(0, 0, width, height);
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      context.beginPath();
      context.rect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      context.fillStyle = grid[row][col] ? '#eee' : 'white';
      context.fill();
    }
  }
}

nextGeneration = (grid) => {
  const newGrid = grid.map(arr => [...arr]);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const neighbors = countNeighbors(grid, row, col);
      const cell = grid[row][col];

      if (cell === 1 && (neighbors < 2 || neighbors > 3)) {
        newGrid[row][col] = 0;
      } else if (cell === 0 && neighbors === 3) {
        newGrid[row][col] = 1;
      }
    }
  }

  return newGrid;
}

countNeighbors = (grid, row, col) => {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue;
      const x = row + i;
      const y = col + j;

      if (x >= 0 && x < rows && y >= 0 && y < cols) {
        count += grid[x][y];
      }
    }
  }
  return count;
}

const update = () => {
  grid = nextGeneration(grid);
  drawGrid();
  requestAnimationFrame(update);
}

update()

window.addEventListener('resize', () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  rows = Math.floor(height / CELL_SIZE)
  cols = Math.floor(width / CELL_SIZE)
  grid = createGrid(rows, cols);
});
