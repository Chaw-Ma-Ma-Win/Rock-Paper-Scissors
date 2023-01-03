const rock = document.getElementsByClassName('rock')[0];
const paper = document.getElementsByClassName('paper')[0];
const scissor = document.getElementsByClassName('scissor')[0];
const player1 = document.querySelector('.player1');
const result = document.querySelector('.result');

let rockClass = rock.className;
let paperClass = paper.className;
let scissorClass = scissor.className;

window.setTimeout(function () {
  window.location.reload(true);
}, 9000);

let array = ['rock', 'paper', 'scissor'];

Array.prototype.random = function (length) {
  return this[Math.floor(Math.random() * length)];
};

var item = array.random(array.length);
var item1 = array.random(array.length);
var item2 = array.random(array.length);

rock.addEventListener('click', () => {
  player1.innerHTML = 'rock';
  if (item == 'rock') {
    const player2 = document.querySelector('.player2');
    player2.innerHTML = 'rock';
    result.innerHTML = 'same';
  } else if (item == 'paper') {
    const player2 = document.querySelector('.player2');
    player2.innerHTML = 'paper';
    result.innerHTML = 'lose';
  } else {
    const player2 = document.querySelector('.player2');

    player2.innerHTML = 'scissor';
    result.innerHTML = 'win';
  }
});
paper.addEventListener('click', () => {
  player1.innerHTML = 'paper';
  if (item1 == 'rock') {
    const player2 = document.querySelector('.player2');
    player2.innerHTML = 'rock';
    result.innerHTML = 'lose';
  } else if (item1 == 'paper') {
    const player2 = document.querySelector('.player2');

    player2.innerHTML = 'paper';
    result.innerHTML = 'same';
  } else {
    const player2 = document.querySelector('.player2');

    player2.innerHTML = 'scissor';
    result.innerHTML = 'win';
  }
});
scissor.addEventListener('click', () => {
  player1.innerHTML = 'scissor';
  if (item2 == 'rock') {
    const player2 = document.querySelector('.player2');
    player2.innerHTML = 'rock';
    result.innerHTML = 'lose';
  } else if (item2 == 'paper') {
    const player2 = document.querySelector('.player2');

    player2.innerHTML = 'paper';
    result.innerHTML = 'win';
  } else {
    const player2 = document.querySelector('.player2');

    player2.innerHTML = 'scissor';
    result.innerHTML = 'same';
  }
});
