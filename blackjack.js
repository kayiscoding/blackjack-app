let player = {
    name: "Ronaldo",
    chips: 10
}
let cards = []
hasBlackJack = false
inGame = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let answer = Math.floor(Math.random () * 13) + 1

    if (answer === 1){
        return 11
    }

    else if (answer > 10){
        return 10
    } 

    else{
        return answer
    }
}

function startGame(){
    inGame = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for ( let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    }
    
    else if (sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true
    } 
    
    else {
        message = "You're out of the game!"
        inGame = false
    }
    
    messageEl.textContent = message
    
}

function newCard(){
    if (inGame === true && hasBlackJack === false){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}

// function reset(){
//     cards = 0
//     sum = 0
//     messageEl.textContent = "Want to play a round of BlackJack?"
//     sumEl.textContent = "Sum: "
//     cardsEl.textContent = "Cards: "
// }