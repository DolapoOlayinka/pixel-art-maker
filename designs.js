//TODO: store classes, IDs and tags in variables
//TODO: create a grid
//TODO: prevent page from reloading after submit button is clicked by using preventDefault()
//TODO: link selected colors with each cells clicked
//TODO: reset grid after it has been clicked

// give the HTML document a new color
document.body.style.backgroundColor = 'pink';

// store the grid size in a variable for reference
let sizePicker = document.getElementById('sizePicker');


//store the following IDs in variables for reference
let gridCanvas = document.getElementById('pixelCanvas');
let gridWidth =  document.getElementById('inputWidth');
let gridHeight = document.getElementById('inputHeight');

//create grid when user submits selected grid size
sizePicker.addEventListener('submit', function makeGrid(event) {
    gridCanvas.innerHTML = ' ';

    //loop through table rows and columns to create grid
    for (let row = 1; row <= gridWidth.value; row++) {
        let rows = document.createElement('tr');
        gridCanvas.appendChild(rows);

        for (let column = 1; column <= gridHeight.value; column++) {
            let columns = document.createElement('td');
            rows.appendChild(columns);
        }
    }
    // When size is submitted by the user, prevent page from refreshing which is the default function
    event.preventDefault();

    //To reset grid to blank slate
    function resetGrid() {
        rows.forEach( function(row,column) {
            row.remove();
            column.remove();
        });
    }
    resetGrid();
});

// when a grid cell is clicked, change background color to the chosen color in the color wheel
let pixelsColor = document.getElementById('colorPicker');
gridCanvas.addEventListener('click', function chosenColor(cells){
    let newColor = pixelsColor.value;
    cells.target.style.background = newColor;
});


