let userGridSize = 16;
const container = document.querySelector("#container");
const clearBtn = document.querySelector("#clear");
const sizeBtn = document.querySelector("#size");
const rainbowBtn = document.querySelector("#rainbow")
const column = document.createElement("div");

const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  newColor = "#" + randomColor;
  return newColor;
}


function createGrid () {
for (let i = 0; i < userGridSize; i++) {
  const column = document.createElement("div");
  column.setAttribute(
    "style",
    "display: flex; flex-grow: 1; flex-wrap: wrap; flex-direction: column; ",
  );
  container.appendChild(column);

  

  for (let i = 0; i < userGridSize; i++) {
    const row = document.createElement("div");
    row.setAttribute(
      "style",
      "background: white; border: 1px solid; flex-grow: 1;",
    );
    column.appendChild(row);

    row.addEventListener("mouseover", () => {
     row.style.backgroundColor = setBg();
    });

    clearBtn.addEventListener("click", () => {
    row.style.backgroundColor = "white";
    });
 
  
}
}
return column;
}

createGrid();
sizeBtn.addEventListener("click", () => {
  userGridSize = prompt("Choose grid size from 1 to 100 (per row).", "1-100");
  createGrid();
})
rainbowBtn.addEventListener("click", () => {
  container.removeChild(column);
  })




