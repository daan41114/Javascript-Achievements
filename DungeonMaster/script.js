let button = document.getElementById('button');
let stat1 = document.getElementById('stat1');

const numbers = [];


button.addEventListener('click', () => {
    for (let i = 0; i <= 4; i++) numbers.push(randomizer());;

    console.log(numbers);
    numbers.sort();
    var kleinste=numbers.shift();
    console.log(kleinste);
    console.log(numbers);
    var optel=0;
    for (i = 0; i < numbers.length; i++){
        optel += numbers[i];
    }
    

    stat1.innerHTML = "Stats: " + optel;

})


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
function randomizer(range = 6){ 
    return Math.floor((Math.random() * range)) + 1;
}