// YOUR CODE HERE
import {Game} from './scripts/Game.js'

window.addEventListener('DOMContentLoaded', async (event)=>{
    const array = document.URL.match(/[a-z0-9]+/g)
    const username = array[array.length-1]

    let game = new Game(username, 'medium');
    await game.loadCurrRecord(username);

    // Grabs the Button Container
    const buttons = document.querySelector('.button-container');

    // Adds listener to Button Container
    buttons.addEventListener('click', async(event)=>{

        // Game only happens if you click the buttons
        if(event.target.id === 'rock-button' ||
        event.target.id === 'paper-button' ||
        event.target.id === 'scissors-button'){

            // Gets PLAYERS TURN
            let playerMove = event.target.innerHTML;

            // PLAYS THE GAME
            await game.turn(playerMove)
            console.log(game.record)
            console.log(game.overallRecord)


        }
    })

    // Grabs 'Reset Stats' Button
    const resetButton = document.querySelector('.game-controls').children[0]

    // Listens for Button Click on 'Reset Stats' Button
    resetButton.addEventListener('click', (event)=>{

        // Resets Game
        game.reset()
    })
})