export class cPlayer{
    constructor(difficulty){
        this.moveOptions=['Rock', 'Paper', 'Scissors'];
        this.difficulty = difficulty
        this.idealMove = {
            'Paper':'Scissors',
            'Rock':'Paper',
            'Scissors':'Rock',
        }
        this.moveTracker ={
            'Rock': 0,
            'Paper': 0,
            'Scissors': 0
        }
        this.cLosses = 0;
    }

    move(){
        if (this.difficulty === 'easy'){
            return this.randMove()
        } else if (this.difficulty === 'medium'){
            if (Math.floor(Math.random()*3)){
                return this.randMove();
            }
            return this.goodMove()
        } else {
            return this.bestMove();
        }
    }

    moveSaver(move){
        this.moveTracker[move]+=1
    }

    randMove(){
        let randNum = Math.floor(Math.random()*3)
        return this.moveOptions[randNum]
    }

    goodMove(){
        if (this.isEnoughInfo() && this.cLosses<4){
            let values = Object.values(this.moveTracker)
            let max = Math.max(...values)
            let count=0;

            values.forEach((el)=>{
                if(el===max){
                    count+=1
                }
            })
            console.log(values, max, count)

            if (count===1){
                for(let key in this.moveTracker){
                    if (this.moveTracker[key]===max){
                        return this.idealMove[key]
                    }
                }
            }
        }

        return this.randMove();


    }

    isEnoughInfo(){
        let count = 0;

        for(let move in this.moveTracker){
            count+=this.moveTracker[move]
        }

        if (count>=5){
            return true
        }

        return false;
    }



    updateLoss(move){
        if(move==='wins'){
            this.cLosses+=1;
        } else if (move==='losses'){
            this.cLosses=0;
        }
    }
}
