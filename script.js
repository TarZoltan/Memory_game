const emojis = ['🐶', '🐱', '🐭', '🐰', '🦊', '🐻', '🐼', '🐸'];
let cards = [...emojis, ...emojis]; // ...emojis -> az emojis tömb elemeit egyessével bepakolja a tömbbe
cards = cards.sort(() => 0.5 - Math.random()); // () => Nyíl függvény (rövidebb módja a függvények írásának)

const board = document.querySelector('.game-board');
let flippedCards = [];
let lockBoard = false;

cards.forEach((emoji) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.emoji = emoji;
  card.innerText = ''; // kezdő állapot: rejtve

  card.addEventListener('click', () => {
    if (lockBoard || card.classList.contains('flipped') || card.classList.contains('matched')) return;

    card.classList.add('flipped');
    card.innerText = card.dataset.emoji;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      checkMatch();
    }
  });

  board.appendChild(card);
});

function checkMatch() {
    
}

