let cells = document.querySelectorAll('#field td');

i = 1;

 function start(cells) {
   for(let cell of cells) {
    cell.addEventListener('click', function step(){
       if (i% 2 == 0) {
        this.textContent = 'x';
       } else {
        this.textContent = 'o';
       }
       i++;
       this.removeEventListener('click', step);
       if (isWinner(cells) === true ) {
        console.log(`победитель ${this.textContent}`)
       }
    })
   }
}

function isWinner(cells) {
    let combs = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for (let comb of combs) {
      if (cells[combo[0]].textContent == cells[comb[1]].textContent &&
        cells[comb[1]].textContent == cells[comb[2]].textContent &&
         cells[comb[1]].textContent != ''){
            return true;
         }
    }
    return false;
}

start(cells);
