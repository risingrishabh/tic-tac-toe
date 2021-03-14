import React from 'react';
import Cell from './Cell';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            boardConfig: [ [' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']],
            turn: 1,
            verdict: 'IN_PROGRESS',
        }
    }

    getGameVerdict(boardConfig) {
        for(let i = 0; i <= 2; i++) {
            if (boardConfig[i][0] != ' ' && boardConfig[i][0] == boardConfig[i][1]
                && boardConfig[i][1] == boardConfig[i][2]) {
                    return (boardConfig[i][0] == 'X' ? 'PLAYER_1' : 'PLAYER_2');
                }
        }
        for(let i = 0; i <= 2; i++) {
            if (boardConfig[0][i] != ' ' && boardConfig[0][i] == boardConfig[1][i]
                && boardConfig[1][i] == boardConfig[2][i]) {
                    return (boardConfig[0][i] == 'X' ? 'PLAYER_1' : 'PLAYER_2');
                }
        }
        if (boardConfig[0][0] != ' ' && boardConfig[0][0] == boardConfig[1][1]
            && boardConfig[1][1] == boardConfig[2][2]) {
                return (boardConfig[0][0] == 'X' ? 'PLAYER_1' : 'PLAYER_2');
        }
        if (boardConfig[0][2] != ' ' && boardConfig[0][2] == boardConfig[1][1]
            && boardConfig[1][1] == boardConfig[2][0]) {
                return (boardConfig[0][2] == 'X' ? 'PLAYER_1' : 'PLAYER_2');
        }

        let noOfFilledCells = 0;
        for(let i = 0; i<= 2; i++) {
            for(let j = 0; j <= 2; j++) {
                if (boardConfig[i][j] != ' ') {
                    noOfFilledCells++;
                }
            }
        }

        if (noOfFilledCells == 9) {
            return 'DRAW';
        }
        else {
            return 'IN_PROGRESS';
        }
        
    }

    handleCellClick(row, col) {
        if (this.state.boardConfig[row][col] == ' '
            && this.state.verdict === 'IN_PROGRESS') {
            this.setState(prevState => {
                let char = (prevState.turn == 1 ? 'X' : 'O');
                let newTurn = (prevState.turn == 1 ? 2 : 1);
                prevState.boardConfig[row][col] = char;
                let newBoardConfig = prevState.boardConfig;
                let newVerdict = this.getGameVerdict(newBoardConfig);
                return {
                    turn: newTurn,
                    boardConfig: newBoardConfig,
                    verdict: newVerdict
                }
            });
        }
    }

    render() {
        return (
            <div>
                <h4> { `Game verdict so far ${this.state.verdict}`} </h4>
                <h3> {`Turn of Player #${this.state.turn}`} </h3>
                <table>
                    <tr>
                        <td> <Cell
                                char={this.state.boardConfig[0][0]}
                                onClick={() => this.handleCellClick(0, 0)} 
                                />
                        </td>
                        <td> <Cell char={this.state.boardConfig[0][1]} onClick={() => this.handleCellClick(0, 1)} /> </td>
                        <td> <Cell char={this.state.boardConfig[0][2]} onClick={() => this.handleCellClick(0, 2)} /> </td>
                    </tr>
                    <tr>
                        <td> <Cell char={this.state.boardConfig[1][0]} onClick={() => this.handleCellClick(1, 0)} /> </td>
                        <td> <Cell char={this.state.boardConfig[1][1]} onClick={() => this.handleCellClick(1, 1)} /> </td>
                        <td> <Cell char={this.state.boardConfig[1][2]} onClick={() => this.handleCellClick(1, 2)} /> </td>
                    </tr>
                    <tr>
                        <td> <Cell char={this.state.boardConfig[2][0]} onClick={() => this.handleCellClick(2, 0)} /> </td>
                        <td> <Cell char={this.state.boardConfig[2][1]} onClick={() => this.handleCellClick(2, 1)} /> </td>
                        <td> <Cell char={this.state.boardConfig[2][2]} onClick={() => this.handleCellClick(2, 2)} /> </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Board;