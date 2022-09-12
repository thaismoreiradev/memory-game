const gridDisplay = document.querySelector("#grid");
const cardsChosen = [];
const cards = document.querySelectorAll('img');
const cardsChosenIds = [];


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



createBoard = () => {
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
    if (cardsChosen[0] == cardsChosen[1]) {
        alert("congrats")
        cards[cardsChosenIds[0]].setAttribute('src', images/image-white.jpg)
    }
}


function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
    
};











//    {
//         name: 'image-blank',
//         img: 'images/image-blank.jpg',
//     },
//     {
//         name: 'image-white',
//         img: 'images/image-white.jpg',
//     }