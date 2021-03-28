import {cPlayer} from './cPlayer.js'

export class Game{
    constructor(username, difficulty){
        this.user = username
        this.difficulty = difficulty
        this.type= 'PvE'
        this.comp = new cPlayer(this.difficulty);
        this.record={wins:0,ties:0,losses:0};
        this.overallRecord;
        this.winningMove={
            'Paper':'Rock',
            'Rock':'Scissors',
            'Scissors':'Paper',
        }
    }

    async loadCurrRecord(username){
        const response = await fetch(`/game/record`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
               username
            })
        })
        let {record} = await response.json();

        // console.log(record)

        this.overallRecord = {
            wins: record.wins,
            ties: record.ties,
            losses:record.losses
        }
        console.log(this.overallRecord)
    }

    async updateCurrRecord(){
        const response = await fetch(`/game/update-record`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: this.user,
                record: this.overallRecord
            })
        })
    }

    async turn(move){
        const cMove = this.comp.move()

        await this.animateNums();

        document.querySelector('.overlay').classList.add('overlay--hidden')
        document.querySelector('.overlay_message').innerHTML = 3;

        this.666(this.gameResult(move, cMove))
        this.updateBoard(move, cMove)
        this.comp.moveSaver(move)
        await this.updateCurrRecord()
    }


    updateRecord(result){
        this.comp.updateLoss(result);
        this.record[result]+=1
        this.overallRecord[result]+=1
        this.updateScoreBoard(result, this.record[result])
        this.updateHeader(result)
    }

    updateBoard(move, cMove){
        let playerImg = document.getElementById(`player-image`);
        playerImg.src=  `./images/${move.toLowerCase()}.png`;

        let computerImg = document.getElementById(`computer-image`)
        computerImg.src=  `./images/${cMove.toLowerCase()}.png`;
    }

    updateScoreBoard(result, value){
        document.getElementById(result).innerHTML = value;
    }

    updateHeader(result){
        let h1 = document.querySelector('.game-announcements').children[0];
        if (result === 'wins'){
            h1.innerHTML = 'You Won!'
        } else if (result === 'ties'){
            h1.innerHTML = 'You Tied!'
        } else {
            h1.innerHTML = 'You Lost!'
        }
    }

    gameResult(pMove, cMove){
        if (this.winningMove[pMove] === cMove){
            return 'wins'
        } else if (pMove === cMove){
            return 'ties'
        } else {
            return 'losses'
        }
    }
    animateNums(){
        document.querySelector('.overlay').classList.remove('overlay--hidden')
        return new Promise(resolve => {
            let timer = setInterval(() => {

                const overlay_message = document.querySelector('.overlay_message')
                overlay_message.innerHTML = Number(overlay_message.innerHTML)-1;

                if (overlay_message.innerHTML==='0'){
                    clearInterval(timer)
                    resolve('resolved')
                }
            }, 500);
        });
    }

    reset(){
        for(let val in this.record){
            this.record[val]=0;
            this.updateScoreBoard(val, 0)
        }
    }

}