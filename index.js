let cardArray = [
    {
        Value: 10,
        Name: "King"
    },
    {
        Value: 10,
        Name: "Queen"
    },
    {
        Value: 10,
        Name: "Jack"
    },
    {
        Value: 10,
        Name: "Ten"
    },
    {
        Value: 9,
        Name: "Nine"
    },
    {
        Value: 8,
        Name: "Eight"
    },
    {
        Value: 7,
        Name: "Seven"
    },
    {
        Value: 6,
        Name: "Six"
    },
    {
        Value: 5,
        Name: "Five"
    },
    {
        Value: 4,
        Name: "Four"
    },
    {
        Value: 3,
        Name: "Three"
    },
    {
        Value: 2,
        Name: "Two"
    }
];
let totalPlayerValue = 0;
let playerCards = '';
let totalDealerValue = 0;
let dealerCards = '';
let dealerFirstCard = '';
let dealerFirstCardValue = '';
let hitOrStayValue = '';

const blackjackController = (() => {
    alert('Welcome to JavaScript Blackjack! Click ok to see your cards.')
    // Dealer controller
    dealerController();
    // Player controller
    playerController();
})();

const dealerController = () => {
    // Initial deal of two cards
    for(let i = 0; i < 2; i++){
        let randomNumber = Math.floor(Math.random() * 12);
        dealerCards += cardArray[randomNumber].Name + ' ';
        totalDealerValue += cardArray[randomNumber].Value;
    };
    dealerFirstCard = dealerCards.split(" ");
}


const playerController = () => {
    // Initial deal of two cards
    for(let i = 0; i < 2; i++){
        let randomNumber = Math.floor(Math.random() * 12);
        playerCards += cardArray[randomNumber].Name + ' ';
        totalPlayerValue += cardArray[randomNumber].Value;
    };

    displayHandInformation();
}

const displayHandInformation = () => {
    hitOrStayValue = window.prompt('Your cards are: ' + playerCards + '\n' + 
                        'Your total cards value: ' + totalPlayerValue + '\n' + 
                        'Dealer first card: ' + dealerFirstCard[0] + '\n' + 
                        'Do you want to hit or stay?' + '\n' + 
                        'Type HIT or STAY. Type EXIT to quit.');
    letPlayerHitOrStay();
}

const letPlayerHitOrStay = () => {
    if(hitOrStayValue === "HIT"){
        playerAdditionalHit();
        if(totalPlayerValue === 21){
            alert("Congrats you got blackjack! Let us see what the dealer gets.");
            letDealerHitOrStay();
            determineWinner();
            resetGame();
            blackjackController();
        }else if(totalPlayerValue > 21){
            alert("You busted sorry. Your cards were: " + playerCards + '\n' + 
            'Your total cards value: ' + totalPlayerValue);
            resetGame();
            blackjackController();
        }else{
            displayHandInformation();
        }
    }else if(hitOrStayValue === 'STAY'){
        alert('You stayed. Dealer will now reveal his cards.');
        letDealerHitOrStay();
        determineWinner();
        resetGame();
        blackjackController();
    }else if(hitOrStayValue === 'EXIT'){
        alert('Thanks for playing!')
        resetGame();
    }else{
        alert("Proper input was not recieved please try again.");
        displayHandInformation();
    }
}

const letDealerHitOrStay = () => {
    alert('Dealers cards: ' + dealerCards + '\n' + 
    'Dealer card value: ' + totalDealerValue);
    if(totalDealerValue < 17){
        dealerAdditionalHit();
        alert('Dealers cards: ' + dealerCards + '\n' + 
        'Dealer card value: ' + totalDealerValue);
    }else if(totalDealerValue === 17 || (totalDealerValue > 17 && totalDealerValue < 21) ){
        alert('Dealers cards: ' + dealerCards + '\n' + 
        'Dealer card value: ' + totalDealerValue + '\n' + 'Dealer stays.');
    }else if(totalDealerValue > 21){
        alert('Dealers cards: ' + dealerCards + '\n' + 
        'Dealer card value: ' + totalDealerValue + '\n' + 'Dealer busts.');
    }else{
        alert('Error occured. Sorry.')
    }
}

const determineWinner = () => {
    if(totalPlayerValue > 21){
        alert("Dealer Wins!");
    }else if(totalDealerValue > 21){
        alert("Player Wins!")
    }else if(totalDealerValue > totalPlayerValue){
        alert("Dealer wins!");
    }else if(totalDealerValue > totalPlayerValue){
        alert("Player wins!");
    }else if(totalDealerValue === totalPlayerValue){
        alert('Same value. Push.')
    }else{
        alert("ERROR");
    }
}

const playerAdditionalHit = () => {
    let randomNumber = Math.floor(Math.random() * 12);
    playerCards += cardArray[randomNumber].Name + ' ';
    totalPlayerValue += cardArray[randomNumber].Value;
}

const dealerAdditionalHit = () => {
    let randomNumber = Math.floor(Math.random() * 12);
    dealerCards += cardArray[randomNumber].Name + ' ';
    totalDealerValue += cardArray[randomNumber].Value;
}

const resetGame = () => {
    totalPlayerValue = 0;
    playerCards = '';
    totalDealerValue = 0;
    dealerCards = '';
    dealerFirstCard = '';
    dealerFirstCardValue = '';
    hitOrStayValue = '';
}