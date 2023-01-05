const divContainer = document.querySelector('.square-container');

function createGrid(numberOfSquares) {
    for (let i=0; i<numberOfSquares; i++) {
        // Create the number of row
        const row = document.createElement('div');
        row.classList.add('row');
        divContainer.appendChild(row);

        for (let j=0; j<numberOfSquares; j++) {
            // Create the number of column inside a row
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
            // Create mouse hovering effect for each square
            createHoverEffect(square);
        }
    }
};

// Grid's initial creation on the first page-loading
let numberOfSquares = 16;
createGrid(numberOfSquares);

let isDrawing = false;
//Mouse hovering event but only when the mouse is being depressed and not being released
function createHoverEffect(div) {
    div.addEventListener('mousedown', function(e) {
        isDrawing = true;
    });
    div.addEventListener('mousemove', function(e) {
        if (isDrawing) {
            div.style.backgroundColor = 'brown';
        }
    });
    div.addEventListener('mouseup', function(e) {
        if (isDrawing) isDrawing = false;
    });
}

// Reset button
const resetButton = document.querySelector('.reset-button');
// Mouse-hovering effect on the reset button
function createButtonHoveringEffect(button) {
    button.addEventListener('mousemove', function(e){
        button.classList.add('button-hovering');
    });
    button.addEventListener('mouseleave', function(e){
        button.classList.remove('button-hovering');
    });
}
createButtonHoveringEffect(resetButton);

// Reset the grid when click on reset button
resetButton.addEventListener('click', function(e) {
    numberOfSquares = prompt('Enter a new number of squares per side\n(Default: 16)');
    while(numberOfSquares > 100) {
        numberOfSquares = prompt('New number cannot exceed 100!\nEnter again');
    }
    if (numberOfSquares) {
        // Delete all the div squares inside the container
        removeGrid();   
        // Create the new grid based on the new number of squares
        createGrid(numberOfSquares);
    }
});

function removeGrid() {
    while (divContainer.firstChild) {
        divContainer.removeChild(divContainer.firstChild);
    }
}

// Toggle the grid lines
const gridLineButton = document.querySelector('.grid-lines-toggle');
createButtonHoveringEffect(gridLineButton);
gridLineButton.addEventListener('click', function(e) {
    const squares = document.querySelectorAll('.row > .square');
    squares.forEach(square => square.classList.toggle('toggled'));
})
