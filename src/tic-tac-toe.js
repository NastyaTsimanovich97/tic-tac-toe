class TicTacToe {
    constructor() {
        this.matrix=[[0,0,0],
                     [0,0,0],
                     [0,0,0]];
        this.player='x';
    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.matrix[rowIndex][columnIndex]==0){
            this.matrix[rowIndex][columnIndex]=this.player;
            if(this.player=='x'){
                this.player='o';
            }
            else{
                this.player='x';
            }
        }
        else{
            this.player=this.player
        }
        
    }

    isFinished() {
        if(this.getWinner() || this.isDraw()){
            return true;
        }
        else{
            return false;
        }
    }

    getWinner() {
        if(this.matrix[0][0]==this.matrix[1][1] && this.matrix[0][0]==this.matrix[2][2] && this.matrix[0][0]!=0){
            return this.matrix[0][0];
        }
        if(this.matrix[0][2]==this.matrix[1][1] && this.matrix[0][2]==this.matrix[2][0] && this.matrix[0][2]!=0){
            return this.matrix[0][2];
        }
        
        for(let i=0; i<3; i++){
            if(this.matrix[i][0]==this.matrix[i][1] && this.matrix[i][0]==this.matrix[i][2] && this.matrix[i][0]!=0){
                return this.matrix[i][0];
            }
            if(this.matrix[0][i]===this.matrix[1][i] && this.matrix[0][i]===this.matrix[2][i] && this.matrix[0][i]!=0){
                return this.matrix[0][i];
            }                   
        }
        return null;
    }

    noMoreTurns() {
        let count=9;
        for(let i=0; i<this.matrix.length;i++){
            for(let j=0;j<this.matrix[i].length;j++){
                if(this.matrix[i][j]!=0){
                    count --;
                }
            }
        }
        if(count==0){
            return true;
        }
        else{
            return false;
        }
    }

    isDraw() {
        let count=9;
        for(let i=0; i<this.matrix.length;i++){
            for(let j=0;j<this.matrix[i].length;j++){
                if(this.matrix[i][j]!=0){
                    count --;
                }
            }
        }
        if(count==0 && !this.getWinner()){
            return true;
        }
        else{
            return false;
        }
           
    }

    getFieldValue(rowIndex, colIndex) {
        if(this.matrix[rowIndex][colIndex]==0){
            return null;
        }
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
