
const container = document.getElementById("board");

 const gridSize = 16

  function fillGrid() {
  for (let x = 0; x < gridSize; x++) {
    const row = document.createElement("div");
    row.classList.add('row')
    for (let i = 0; i < gridSize; i++) {
      const div = document.createElement("div");
      div.classList.add('box')
      div.style.height = 1150 / gridSize + "px";
      row.appendChild(div);
      div.addEventListener('mouseenter', function(e){
    	e.target.classList.add('black');
    })
    }
    container.appendChild(row);

  }
}




let grid = { 
  createGrid : function(gridSize) {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }

  fillGrid();

},


  resetGrid: function(){
	const box = document.querySelector('.box')
    for(let i = 0; i < box.length; i++){
      box[i].classList.remove('black')
    }
}
}

window.onload = function(){
  let reset = document.getElementById('reset')
  let newSize;

  grid.createGrid(16);
  reset.onclick = function(){
    grid.resetGrid()
    newSize = prompt("entrer une nouvelle taille de grille", 16);
    grid.createGrid(newSize)
  }
}

