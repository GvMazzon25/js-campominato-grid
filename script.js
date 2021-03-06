/**
 * L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range (vedi immagine allegata):
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

 */

//Reference
const playBtn = document.getElementById('play');
const dimensionLevels = document.getElementById('levels');
const wrapGrid = document.querySelector('.wrap-grid');



//Grid
playBtn.addEventListener('click', () =>{
    wrapGrid.innerHTML = '';

    const gridDimension = dimensionLevels.value;
    console.log(gridDimension)
    let cellsNumber;
    let cellsPerSide;

    switch (gridDimension){
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
    }
    console.log(cellsNumber);
    console.log(cellsPerSide);

    const grid = document.createElement('div');
    grid.classList.add('grid');

    const numList = [];
    for(let i = 1; i <= cellsNumber; i++){
        const num = genUniqueRandomNumber(numList, 1, cellsNumber)
        numList.push(num)

        const square = createGridSquare(num, cellsPerSide);

        square.addEventListener('click', function() {
            this.classList.add('clicked');
        })

        grid.append(square)
    }
    console.log(numList);

    wrapGrid.append(grid);

})

function genUniqueRandomNumber(list, min, max){
    let number = 0;

    do{
        number = Math.floor(Math.random()*(max - min + 1)) - min;
    }while(list.includes(number));
    
    return number;
}

function createGridSquare(num, cells){
    const type = (num % 2 === 0) ? 'even' : 'add';

    const node = document.createElement('div');
    node.classList.add('square', `square-${type}`);

    node.style.width = `calc(100% / ${cells})`;
    node.style.height = `calc(100% / ${cells})`;

    const span = document.createElement('span');
    span.append(num);
    
    node.append(span);

    return node;
}


