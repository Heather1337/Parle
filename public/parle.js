const flipButton = document.querySelector('.card-flip');
const flashCard = document.querySelector('.flash-card-content');
const nextButton = document.querySelector('.next-card');
const languageButton = document.querySelector('.choose-language');


//Handling Language Selection
var languageEvent = document.getElementById("language-select");
var  chosenLanguage = languageEvent.options[languageEvent.selectedIndex].text;
console.log(chosenLanguage);


let cardWord = '';
// const wordList =[{'front': 'Bonjour', 
// 'back': 'Hello'}, {'front': 'Au Revoir', 
// 'back': 'Bye'},{'front': 'Merci',
// 'back': 'Thank You'}]
let currentCard = 0;
let wordList = null;

languageEvent.addEventListener("click", (e)=> {
  console.log('clicked!', languageEvent.options[languageEvent.selectedIndex].value);
});

languageButton.addEventListener("click", (e) => {
  console.log(chosenLanguage)
  fetch("/french")
    .then((res) => {
        return res.json();
    })
    .then((words) => {
        wordList = words;
    })
    .catch((err) => {
        console.log(err);
    })
});

flipButton.addEventListener("click", (e) => {
  flashCard.innerText = wordList[currentCard].back;
  currentCard++;
});

nextButton.addEventListener("click", (e) => {
  flashCard.innerText = wordList[currentCard].front;
});


// fetch('http:localhost:3000/french')
//   .then((res)=> {
//       console.log(res);
// })




//starts with french
//press button and flips card
  //must keep english word stored
//press button again and flips card to english

//move to next card 

//add typing option to check result 
//keep track of score
//add previous card button

