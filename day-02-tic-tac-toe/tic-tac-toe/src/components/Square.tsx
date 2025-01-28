function Square() {
    return (
        <button className="square">1</button>
    )
}

function TicTacToeBoardRow() {
    return (
        <div className="board-row">
            <Square />
            <Square />
            <Square />
        </div>
    )
}

export default function TicTocToeBoard() {
    return (
        <div>
            <TicTacToeBoardRow />
            <TicTacToeBoardRow />
            <TicTacToeBoardRow />
        </div>
    )
}