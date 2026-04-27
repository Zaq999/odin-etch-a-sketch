const container = document.querySelector("#container");

const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  newColor = "#" + randomColor;
  return newColor;
}

for (let i = 0; i < 10; i++) {
  let column = document.createElement("div");
  column.setAttribute(
    "style",
    "display: flex; flex-grow: 1; flex-wrap: wrap; flex-direction: column; ",
  );
  container.appendChild(column);

  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    row.setAttribute(
      "style",
      "background: white; border: 1px solid; flex-grow: 1;",
    );
    column.appendChild(row);

    row.addEventListener("mouseover", () => {
     row.style.backgroundColor = setBg();
    })
  }
}


