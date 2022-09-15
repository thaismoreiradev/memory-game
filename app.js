import { cardArray } from "./cardArray.js";
const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
const message = document.querySelector("#message")
let cards
let cardsChosenNames = [];
let cardsChosenIds = [];
const cardsWon = [];

// Sorting the cards
cardArray.sort(() => 0.5 - Math.random());

const createBoard = () => {
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/image-blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener("click", flipCard)
        gridDisplay.appendChild(card)
    } 
};

createBoard();

// rules for the game
const checkMatch = () => {
    cards = Array.from(document.querySelectorAll('img'));
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    // in case the user click the same card
    if (optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/image-blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/image-blank.jpg')
        message.textContent = 'You have chosen the same image!'
    }
    
    // when user finds equal cards
    else if (cardsChosenNames[0] == cardsChosenNames[1]) {
        message.textContent = "congrats"
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cards[optionOneId].classList.add('dontFlip')
        cards[optionTwoId].classList.add('dontFlip')
        cardsWon.push(cardsChosenNames[0])
        cardsWon.push(cardsChosenNames[1])
    }
    
    // when user chooses wrong
    else {
        cards[optionOneId].setAttribute('src', 'images/image-blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/image-blank.jpg')
        message.textContent = "not this time"
    }

    resultDisplay.textContent = cardsWon.length / 2
    cardsChosenNames = []
    cardsChosenIds = []

    // add the eventlisterners again, except the matched cards
    cards.map(card => {        
        if (!card.classList.contains('dontFlip')) {
            card.addEventListener('click', flipCard)            
        }
    })

    // when user finishes the game
    if(cardsWon.length == cardArray.length){
        message.textContent = "Congratulations, you found all pairs! :)"
    }
}

// for cards flips
function flipCard() {
    const cardId = this.getAttribute('data-id')
   
    cardsChosenNames.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)

    if(cardsChosenNames.length === 2) {
        cards = Array.from(document.querySelectorAll('img'));

        // removing eventlistener of all cards to prevent a third card flip while the message showed
        cards.map(card => card.removeEventListener('click', flipCard))

        setTimeout(checkMatch, 500)
    }    
};







