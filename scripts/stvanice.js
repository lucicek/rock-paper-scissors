let scoreButtonsLovec = []

// Začátek
document.body
  .addEventListener('keydown', (event) => {
if (event.key === '+') {
  const playAudios = new Audio('./audio/zacatek.mp3')
  playAudios.play();
  setInterval(() => {playAudios.volume = 1.0}, 1000)
}})

// Štvanice
document.body
  .addEventListener('keydown', (event) => {
if (event.key === 'ě') {
  const playAudios = new Audio('./audio/stvanice.mp3')
  playAudios.play();
  setInterval(() => {playAudios.volume = 1.0}, 1000)
}})

// Lovec přichází
document.body
  .addEventListener('keydown', (event) => {
if (event.key === 'č') {
  const playAudios = new Audio('./audio/lovec-prichazi.mp3')
  playAudios.play();
  setInterval(() => {playAudios.volume = 1.0}, 0)
}})

// Lovec start
document.body
  .addEventListener('keydown', (event) => {
if (event.key === 'š') {
  const playAudios = new Audio('./audio/lovec-start.mp3')
  playAudios.play();
  setInterval(() => {playAudios.volume = 1.0}, 0)
}})

let scoreButtons = [1];

renderNaLovu()

// Skóre generátor
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'd') {
    scoreButtons.push(scoreButtons.length + 1)
    console.log(scoreButtons)
    renderNaLovu ()
    }})

// Renderuje a generuje buttony
function renderNaLovu () {
  let scoreButtonsHTML = '';
  for(let i = 0; i < scoreButtons.length; i++) {
    scoreButtonsHTML += `<button class="css-progress-design js-button-${scoreButtons[i]}">${scoreButtons[i]}</button>`
    
  }
  document.querySelector('.js-na-lovu-progres').innerHTML = scoreButtonsHTML;
  renderLovec();
    
 };

// Class lovec
//let scoreButtonsLovec = []
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'm') {
    scoreButtonsLovec.push(scoreButtonsLovec.length + 1)
    renderLovec ()
    console.log(scoreButtonsLovec)
}})

// Renderuje lovcův progres
let indexLovec = 0;
function renderLovec () {

  for(let i = 0; i < scoreButtonsLovec.length; i++) {
    indexLovec = i
    document.querySelector(`.js-button-${scoreButtons[indexLovec]}`).classList.add('css-progress-design-lovec')
    
  }};

// Audio soutěžcí
document.body.addEventListener('keydown', (event)=> {
  if(event.key === 'p'){
    document.querySelector('.js-schovavac').classList.add('audio-lovec')
  }
  if(event.key === 'w'){
    document.querySelector('.js-schovavac').classList.remove('audio-lovec')
  }
})


