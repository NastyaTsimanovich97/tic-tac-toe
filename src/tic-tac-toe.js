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

    }

    getWinner() {
        // console.log(this.matrix)
        // for(let i=0;i<this.matrix.length;i++){
        //     for(let j=0;j<this.matrix[i].length;j++){
        //         if(this.matrix[i][j]==0 || this.matrix[i][j+1]==0 || this.matrix[i][j+2]==0){
        //             return null;
        //         }
        //         if(this.matrix[i][j+2]!=0){
        //             if(this.matrix[i][j+2]==this.matrix[i+1][j+1] && this.matrix[i][j+2]==this.matrix[i+2][j]){
        //                 console.log(this.matrix[i][j+2])
        //                 return this.matrix[i][j+2];
        //             }
        //         }
        //     }
        // }
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
    }

    getFieldValue(rowIndex, colIndex) {
        if(this.matrix[rowIndex][colIndex]==0){
            return null;
        }
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
