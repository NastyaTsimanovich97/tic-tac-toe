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
        console.log(this.matrix)
    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {

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
