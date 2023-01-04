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

createGrid(16);

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