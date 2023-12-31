const grid = document.querySelector('.grid');

const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'summer',
    'meeseeks',
    'scroopy',
    'rick'
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;

    return element;
}

const createCard = (character) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    return card;

}

const loadGame = () => {

    const duplicatecharacteres = [... characters, ... characters];

    const shuffledArray = duplicatecharacteres.sort( () => Math.random() - 0.5 );
   

    shuffledArray.forEach((character) => {

        const card = createCard(character);
        grid.appendChild(card)

    })
}

loadGame();