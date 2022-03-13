const container = document.querySelector('#container');


function createGrid (row, column) {

    for(i = 0; i < (row * column); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'cell';
    }
}

createGrid(16,16);