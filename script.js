const container = document.querySelector('#container');
const clearBtn = document.querySelector('.clear');
const newBtn = document.querySelector('.new');
let cell = document.createElement('div');

createGrid(16,16);

newBtn.addEventListener('click', function() {
    let userInput = prompt('How many squares? [0 - 100]', '');

    if (userInput <= 100) {
        createGrid(userInput, userInput);
    } 
});

function clearGrid() {
    container.removeChild(cell);
}


function createGrid(row, column) {

    for(i = 0; i < (row * column); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'cell';

        clearBtn.addEventListener('click', clearGrid);

        function clearGrid() {
            container.removeChild(cell);
            } 
        }
    }


    

