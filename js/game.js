var clicks = 0;

class MemoryGame {

    constructor() {
        this.duration = 500;
        this.cardsContainer = document.querySelector('.js-cards');
        this.cards = Array.from(this.cardsContainer.children);
        this.shuffleCards();
    }

    // shuffle cards

    shuffleCards() {
        startWatching(0, 0);
        this.cards.forEach(card => {
            const randomNumber = Math.floor(Math.random() * this.cards.length) + 1;

            card.classList.remove('has-match');

            setTimeout(() => {
                card.style.order = `${randomNumber}`;
            }, 400);
        })
    }

    checkAllCards() {
        if (!this.cards.every(card => card.classList.contains('has-match'))) return;
        
        setTimeout(() => {
            clearInterval(timer_observer);
            this.shuffleCards();
            clicks = 0;
            document.getElementsByClassName('time')[0].innerHTML = '00:00';
            document.getElementsByClassName('click')[0].innerHTML = '0';
        }, 1500);
    }

    stopEvent() {
        this.cardsContainer.classList.add('no-event');

        setTimeout(() => {
            this.cardsContainer.classList.remove('no-event');
        }, this.duration);
    }

    // if two flipped cards match

    checkIfMatched(firstCard, secondCard) {
        if (firstCard.dataset.hero === secondCard.dataset.hero) {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');

            firstCard.classList.add('has-match');
            secondCard.classList.add('has-match');

            firstCard.classList.add('match-anim');
            secondCard.classList.add('match-anim');

            this.checkAllCards();
        } else {
            setTimeout(() => {
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');

                firstCard.classList.remove('match-anim');
                secondCard.classList.remove('match-anim');
            }, this.duration);
        }
    }

    // when card is flipped

    flip(selectedCard) {
        selectedCard.classList.add('flipped');

        const flippedCards = this.cards.filter(card => card.classList.contains('flipped'));

        // if two cards are flipped

        if (flippedCards.length === 2) {
            this.stopEvent();
            this.checkIfMatched(flippedCards[0], flippedCards[1]);
        }
    }

}

const game = new MemoryGame;

game.cards.forEach(card => {
    card.addEventListener('click', game.flip.bind(game, card));
})

// moves counter

for (i = 0; i < 18; i++) {
    document.querySelectorAll('.game-back-card')[i].addEventListener('click', onClick);
}

function onClick() {
    clicks += 1;
    document.getElementsByClassName('click')[0].innerHTML = clicks;
};

// timer watch

seconds = 0;
minutes = 0;
seconds_str = '';
minutes_str = '';

function startWatching(seconds, minutes) {
    timer_observer = setInterval(() => {
        seconds > 58 ? ((minutes += 1), (seconds = 0)) : (seconds += 1);
        seconds_str = seconds > 9 ? `${seconds}` : `0${seconds}`;
        minutes_str = minutes > 9 ? `${minutes}` : `0${minutes}`;
        document.getElementsByClassName('time')[0].innerHTML = `${minutes_str}:${seconds_str}`;
    }, 1000);
}