// 2. Create the player object. Give it two keys, name and chips, and set their values

let player = {
    name :"Abdul",
    chips : 150
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" +player.chips



let hasBlackJack = false
let isAlive = false

let message = " "


// 1. Store the message-el paragraph in a variable called messageEl
let messageEl = document.querySelector("#message-el")


//Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the 
//function.//

// 2. Store the sum paragraph in a variable called sumEl
let sumEl =document.querySelector("#sum-el")

// 2. Store the cards paragraph in a variable called cardsEl
// 3. Render the cards on the page using this format -> "Cards: 10 4"
let cardsEl = document.querySelector("#cards-el")
//make this return a random number between 1 and 13
function getRandomCard(){
//if 1    ->return11
//if 11-13  ->return 10
    
    let randomNumer =Math.floor(Math.random() * 13) + 1
    if(randomNumer > 10){
        return 10
    }
    else if(randomNumer === 1){
        return 11
    }
    else{
        return randomNumer
    }
}

function startGame(){
// Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
     cards = [firstCard,secondCard]
     sum = firstCard + secondCard 

    isAlive = true


    renderGame()
}

function renderGame() {
// 3. Render the sum on the page using this format -> "Sum: 14"
//sumEl.textContent = "sum; 23"
    if(sum <= 20) {
        message = "Do you want to draw a new card 🙂"
    }
    else if(sum === 21){
        message = "wohoo! You've got a Blackjack!🥳"
        hasBlackJack = true
    }
    else{
        message = "You're out of game!😭"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent ="sum: " + sum
    cardsEl.textContent = "Cards: "

    for(let i = 0; i < cards.length ; i++ ) {
        cardsEl.textContent += cards[i] + " "
    }

    //cardsEl.textContent = "cards: "+ cards[0] + " " + cards[1]
    
}
// 2. Display the message in the messageEl using messageEl.textContent


// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard() {
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum+= card
        cards.push(card)
        renderGame()
    }
}

// 1. Create a card variable, and hard code its value to a number (2-11)
    
    // 2. Add the new card to the sum variable
    
    // 3. Call startGame()










let age = 22

if(age < 21){
    console.log("You can not enter the club!")
}
else{
    console.log("Welcome!")
}


let ages = 100

if(ages < 100){
    console.log("not elegible!")
}

else if(ages === 100){
    console.log("Here is your birthday card from the King")
}
else{
    console.log("Not elegible, you have already gotten one")
} 



//console.log(4 === 3)  // false`
//console.log(5 > 2)    // true
//console.log(12 > 12)  //false
//console.log(3 < 0)    //false
//console.log(3 >= 3)   //true
//console.log(11 <= 11) //true
//console.log(3 <= 2)  // false
 let myLife = [
    "i have a two year experience in coding",
    "i have complete my lower education career,looking forward to join an IT school",
    "i have no license for now"
 ]
 console.log(myLife[1])
 console.log(myLife[0])
 console.log(myLife[2])

 let myStory =[
    "my name is Abdulhamid musembi", 20 ,true
 ]
console.log(myStory[0])
console.log(myStory[1])
console.log(myStory[2])


let messages = [
    " Hey,how's it going?",
    "I'm great, thank you! How about you?",
    "All good.Been working on my portfolio lately."
]




let newMessage = "Same here!"

messages.push(newMessage)


console.log(messages)

messages.pop()

console.log(messages)

for (let count = 10; count < 21; count+= 1) {
    console.log(count)
}

for(let count=10; count < 101; count+=10) {
    console.log(count)
}

let card = [ 7, 3, 9, 5]

for(let i=0; i <card.length; i++){
    console.log(card[i])
}






let sentence = ["Hello ", "my ", "name ", "is ", "Abdul"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent


for(let i=0 ; i < sentence.length; i++ ){
    
    greetingEl.textContent += sentence[i]
}






let player1Time = 102
let player2Time = 107

function getFastestTime() {
    if (player1Time < player2Time){
        return player1Time
    }
    else if (player2Time < player1Time){
        return player2Time
    }
    else {
        return player1Time
    }
}

let fastesRace = getFastestTime() 

console.log(fastesRace)
//Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out
function totalRaceTime() {
    return player1Time + player2Time
    
}
let total = totalRaceTime()

console.log(total)

//let randomNumber =  Math.floor (Math.random()* 6) + 1

//console.log(randomNumber)
//console.log(randomNumber)
// Create a function, rollDice(), that returns a random number between 1 and 6

function rollDice(){
    let randomNumber =  Math.floor (Math.random()* 6) + 1
    return randomNumber
}

console.log(rollDice())
let hasSolvedChallenge = false
let hasHintsLeft = false

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function

function showSolution() {

    if(hasSolvedChallenge && hasHintsLeft){
        
    }
    console.log("Showing the solution....")
}



let dullo = {
    name : "Abdul",
    age : 19,
    country : "Kenya",
    }

    function logData() {
        console.log(dullo.name + " is " + dullo.age + " Years old " + "and lives in " + dullo.country)
    }
    logData()












