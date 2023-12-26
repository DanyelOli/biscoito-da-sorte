const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);

function toggleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}

function handleTryClick(event) {
  event.preventDefault();

  toggleScreen();
}

function handleResetClick() {
  toggleScreen();
}