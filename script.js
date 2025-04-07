const emojis = ['🐶', '🐱', '🐭', '🐰', '🦊', '🐻', '🐼', '🐸'];
let cards = [...emojis, ...emojis]; // ...emojis -> az emojis tömb elemeit egyessével bepakolja a tömbbe
cards = cards.sort(() => 0.5 - Math.random()); // () => Nyíl függvény (rövidebb módja a függvények írásának)

const board = document.querySelector('.game-board');
let flippedCards = [];
let lockBoard = false;

const restartButton = document.querySelector('.restart-button');

restartGame();

function checkMatch() {
    const [card1, card2] = flippedCards;
  if (card1.dataset.emoji === card2.dataset.emoji) {
    card1.classList.add('matched');
    card2.classList.add('matched');
    flippedCards = [];
  } else {
    lockBoard = true;
    setTimeout(() => {
      card1.classList.remove('flipped');
      card2.classList.remove('flipped');
      card1.innerText = '';
      card2.innerText = '';
      flippedCards = [];
      lockBoard = false;
    }, 1000);

}
}

restartButton.addEventListener('click', restartGame);

function restartGame() {
    flippedCards = [];
    lockBoard = false;
 
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.classList.remove('flipped', 'matched'); 
      card.innerText = '';
    });
  
    const shuffledCards = shuffle([...emojis, ...emojis]);
  
    board.innerHTML = '';
    shuffledCards.forEach((emoji) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.emoji = emoji;
      card.innerText = '';
  
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
  }

  function shuffle(array) {
    return array.sort(() => 0.5 - Math.random());
  }