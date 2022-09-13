const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cards
let cardsChosenNames = [];
let cardsChosenIds = [];
const cardsWon = [];

const cardArray = [
    {
        name: 'blouse1',
        img: 'images/blouse1.jpg',
    },
    {
        name: 'blouse2',
        img: 'images/blouse2.jpg',
    },
    {
        name: 'blouse3',
        img: 'images/blouse3.jpg',
    },
    {
        name: 'blouse4',
        img: 'images/blouse4.jpg',
    },
    {
        name: 'blouse5',
        img: 'images/blouse5.jpg',
    },
    {
        name: 'blouse6',
        img: 'images/blouse6.jpg',
    },
    {
        name: 'blouse7',
        img: 'images/blouse7.jpg',
    },
    {
        name: 'blouse8',
        img: 'images/blouse8.jpg',
    },
    {
        name: 'blouse1',
        img: 'images/blouse1.jpg',
    },
    {
        name: 'blouse2',
        img: 'images/blouse2.jpg',
    },
    {
        name: 'blouse3',
        img: 'images/blouse3.jpg',
    },
    {
        name: 'blouse4',
        img: 'images/blouse4.jpg',
    },
    {
        name: 'blouse5',
        img: 'images/blouse5.jpg',
    },
    {
        name: 'blouse6',
        img: 'images/blouse6.jpg',
    },
    {
        name: 'blouse7',
        img: 'images/blouse7.jpg',
    },
    {
        name: 'blouse8',
        img: 'images/blouse8.jpg',
    }
];

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




const checkMatch = () => {
    cards = Array.from(document.querySelectorAll('img'));
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (optionOneId == optionTwoId){

        cards[optionOneId].setAttribute('src', 'images/image-blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/image-blank.jpg')
        alert('You have chosen the same image!')
    } else if (cardsChosenNames[0] == cardsChosenNames[1]) {
        alert("congrats")
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosenNames[0])
        cardsWon.push(cardsChosenNames[1])
    } else {
        cards[optionOneId].setAttribute('src', 'images/image-blank.jpg')
        cards[optionTwoId].setAttribute('src', 'images/image-blank.jpg')
        alert("not this time")
    }

    resultDisplay.textContent = cardsWon.length / 2
    cardsChosenNames = []
    cardsChosenIds = []

    cards.map(card => {
        console.log(card)
        // if (!cardsWon.includes(card.name)) {
        //     card.addEventListener('click', flipCard)            
        // }
    })

    if(cardsWon.length == cardArray.length){
        resultDisplay.textContent = "Congratulations, you found all pairs! :)"
    }
}


function flipCard() {
    const cardId = this.getAttribute('data-id')
   
    cardsChosenNames.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)

    this.setAttribute('src', cardArray[cardId].img)

    if(cardsChosenNames.length === 2) {
        cards = Array.from(document.querySelectorAll('img'));
        cards.map(card => card.removeEventListener('click', flipCard))        
        setTimeout(checkMatch, 500)

    }    
};







