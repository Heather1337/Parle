const flipButton = document.querySelector('.card-flip');
const flashCard = document.querySelector('.flash-card-content');
const nextButton = document.querySelector('.next-card');

let cardWord = '';
const wordList =[{'front': 'Bonjour', 
'back': 'Hello'}, {'front': 'Au Revoir', 
'back': 'Bye'},{'front': 'Merci',
'back': 'Thank You'}]
let currentCard = 0;

flipButton.addEventListener("click", (e) => {
//   cardWord = flashCard.textContent;
//   flashCard.innerText = 'Hello';
  flashCard.innerText = wordList[currentCard].back;
  currentCard++;
});

nextButton.addEventListener("click", (e) => {
//   flashCard.innerText = "Au Revoir";
  flashCard.innerText = wordList[currentCard].front;
});

//starts with french
//press button and flips card
  //must keep english word stored
//press button again and flips card to english

//move to next card 

