const gridContainer = document.getElementById('grid-container');
let gridSize = 16;
let newSize = 16;
let colorSelect = '#000000';

function black() {
 colorSelect = '#000000'   
}

function erase() {
    colorSelect = '#ffffff'
}

function setGridSize (size) {
    gridSize = size;
}

function makeGrid(num) {
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    for (let i = 0; i < num * num; i++) {
        const newCell = document.createElement('div');
        newCell.classList.add('grid-cell');
        newCell.addEventListener("mousedown",setColor);
        newCell.addEventListener("mouseover", setColor);
        gridContainer.appendChild(newCell);
    }

}

makeGrid(16);

//grid size selects a number based on slide values range (1-64);
const gridNumber = document.getElementById('grid-numbers')
const gridSlider = document.getElementById('grid-slider')

function setSize(size) {
gridNumber.innerHTML = `${size} x ${size}`
}

function updateSize(size) {
    setGridSize(size);
    setSize(size);
    resetGrid();
}
gridSlider.onmousemove = (e) => setSize(e.target.value);
gridSlider.onchange = (e) => updateSize(e.target.value);

//clear the grid
const resetButton = document.getElementById('reset');
const rainbowButton = document.getElementById('rainbow');
const gridLineButton = document.getElementById('grid-line');
const colorButton = document.getElementById('color');
const eraseButton = document.getElementById('erase');
const blackButton = document.getElementById('black');

function gridClear() {
    gridContainer.innerHTML = '';
}

function resetGrid() {
    gridClear();
    makeGrid(gridSize)
}
resetButton.onclick = () => resetGrid();
rainbowButton.onclick = () => rainbowSelect();
gridLineButton.onclick = () => toggleGridLines(); 
colorButton.onclick = (e) => setColor(e);
eraseButton.onclick = () => setColor(erase());
blackButton.onclick = () => setColor(black());

const gridCell = document.getElementById('grid-cell');

function toggleGridLines() {
const gridCell = document.querySelectorAll('.grid-cell')
gridCell.style.toggle("border");
console.log("Removed Grid Lines");
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


function setColor(e) {
    if (e.type === 'mouseover' && mouseDown) {
    e.target.style.backgroundColor = colorSelect }
}

function rainbowSelect() {
console.log ("Selected Rainbow Colors")
}