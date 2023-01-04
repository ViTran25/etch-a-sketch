const divContainer = document.querySelector('.square-container');

function createGrid(numberOfSquares) {
    for (let i=0; i<numberOfSquares; i++) {
        
        const row = document.createElement('div');
        row.classList.add('row');
        divContainer.appendChild(row);

        for (let j=0; j<numberOfSquares; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
    }
};

createGrid(16);