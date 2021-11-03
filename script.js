/**
 * L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range (vedi immagine allegata):
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

 */

//Reference
const playBtn = document.getElementById('play');
const levels = document.getElementById('levels');
const wrapGrid = document.querySelector('.wrap-grid');



//Grid
playBtn.addEventListener('click', () =>{
    wrapGrid.innerHTML = '';

    let cellsNumber;
    let cellsPerSide;

    switch (levels){
        case '1':
            cellsNumber = 100;
            cellsPerSide = 10;
        break
        case '2':
            cellsNumber = 81;
            cellsPerSide = 9;
        break
        case '3':
            cellsNumber = 49;
            cellsPerSide = 7;
        break
    }

    const grid = document.createElement('div');
    grid.classList.add('grid');

    for (let i = 1; i <= cellsNumber; i++){
        const square = createGridSquare(i, cellsPerSide)

        square.addEventListener ('click',() => {
            square.classList.add('clicked');
        })

        grid.append(square)

    }

    wrapGrid.append(grid);
})

//Square Grid
function createGridSquare(num, cells){
    const nodo = document.createElement('div');

    nodo.classList.add('square');

    nodo.style.width = `calc(100% / ${cells})`;
    nodo.style.height = `calc(100% / ${cells})`;

    nodo.append(num);

    return nodo;
}


