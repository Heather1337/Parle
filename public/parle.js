const flipButton = document.querySelector('.card-flip');
const flashCardWord = document.querySelector('.flash-card-content');
const nextButton = document.querySelector('.next-card');
const languageButton = document.querySelector('.choose-language');
const flashCard = document.querySelector('.flash-card');



let cardWord = '';
let currentCard = 0;
let wordList = null;


languageButton.addEventListener("click", (e) => {
  fetch("/french")
    .then((res) => {
        return res.json();
    })
    .then((words) => {
        wordList = words;
        console.log(words);
    })
    .catch((err) => {
        console.log(err);
    })
});

flashCard.addEventListener("click", (e) => {
  flashCardWord.innerText = wordList[currentCard].back;
  currentCard++;
});

nextButton.addEventListener("click", (e) => {
  flashCardWord.innerText = wordList[currentCard].front;
});






//starts with french
//press button and flips card
  //must keep english word stored
//press button again and flips card to english

//move to next card 

//add typing option to check result 
//keep track of score
//add previous card button

