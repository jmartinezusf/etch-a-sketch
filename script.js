const container = document.querySelector('#container');
const clearBtn = document.querySelector('.clear');
const newBtn = document.querySelector('.new');

createGrid(20,20);

function clearGrid() {
    container.removeChild(cell);
}


function createGrid(row, column) {

    for(i = 0; i < (row * column); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'cell';

        cell.addEventListener('mousedown', () => {
            cell.setAttribute('style', 'background: #ff5733');
            cell.addEventListener('mousedown', () => {
                cell.setAttribute('style', 'background: #c70039');
                cell.addEventListener('mousedown', () => {
                    cell.setAttribute('style', 'background: #900c3f');
                    cell.addEventListener('mousedown', () => {
                        cell.setAttribute('style', 'background: #581845');
                    });
                });
            });
        });

        clearBtn.addEventListener('click', clearGrid);

    }
}

function clearGrid() {
    window.location.reload();
}


    

