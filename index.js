// blackjack funguje tak, že se snažíme mít součet karet čím jak nejblíž 21
// ale nikdy ne víc než 21 - pak hráč vypadne ze hry
// takže: <21 - good    =21 - blackjack    >21 - bad
let player = {
    Name : "Jan",
    Chips : 145,
}
let cards = []
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.Name + ": $" + player.Chips;

function startGame()
{
    hasBlackjack = false;
    isAlive = true;
    let firstCard = getRandomCard(), secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame()
{
    cardsEl.textContent = " Cards: ";
    for ( i = 0; i < cards.length; i++)
    {
        cardsEl.textContent += cards[i] + "|";
    }
    sumEl.textContent = "Sum: " + sum;
    //ifs - rules of blackjack
    if(sum < 21)
    {
        message = "Do you want to draw a new card?";
      
    }
    else if(sum === 21)
    {
        message = "You've got Blackjack!";
        hasBlackjack = true;
    }
    else
    {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard()
{
    if(isAlive === true && hasBlackjack === false)
    {
    console.log("Drawing a new card from the deck");
    let nextCard = getRandomCard();
    sum += nextCard;
    cards.push(nextCard);
    renderGame();
    } 
}

function getRandomCard()
{
    let randomCard = Math.ceil(Math.random() * 13);
    if(randomCard === 1)
    {
        randomCard = 11;
    }
    else if(randomCard > 10)
    {
        randomCard = 10;
    }
    else
    {
        return randomCard;
    }
    return randomCard;
}