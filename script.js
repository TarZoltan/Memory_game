const emojis = ['🐶', '🐱', '🐭', '🐰', '🦊', '🐻', '🐼', '🐸'];
let cards = [...emojis, ...emojis]; // ...emojis -> az emojis tömb elemeit egyessével bepakolja a tömbbe
cards = cards.sort(() => 0.5 - Math.random()); // () => Nyíl függvény (rövidebb módja a függvények írásának)

const board = document.querySelector('.game-board');
let flippedCards = [];
let lockBoard = false;
