"use client";
import {useEffect, useState} from "react"
import Square from "../../components/caro/Square";
type Player = "X" | "O" | "BOTH" | null;
// type size = number;
// const size = 6;

// // calculateWinner for 3x3 board
// function calculateWinner(squares: Player[]) {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];
//     for (let i = 0; i < lines.length; i++) {
//       const [a, b, c] = lines[i];
//       if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//         return squares[a];
//       }
//     }
//     return null;
// }

function calculateWinner(squares: Player[],size: number) {
    const lines = [
        //check row
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
        // check column
      [0, 5, 10, 15, 20],
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24],
        //checkdiagonal
      [0, 6, 12, 18, 24],
      [4, 8, 12, 16, 20],
      
    ];

    for (let x = 0; x <= size; x++) {
        for (let y = 0; y <= size; y++) {
            for (let i = 0; i < lines.length; i++) {
                const [a, b, c, d, e] = lines[i];
                if (squares[a + x + size*y] 
                    && squares[a + x + size*y] === squares[b + x + size*y] 
                    && squares[a + x + size*y] === squares[c + x + size*y] 
                    && squares[a + x + size*y] === squares[d + x + size*y] 
                    && squares[a + x + size*y] === squares[e + x + size*y]
                ) {
                  return squares[a + x + size*y];
                }
            }
        }
    }

    


    return null;
    
}

// function calculateWinner(squares: Player[]) {
//     calculateWinner5x5(squares);
// }

// function rowCheck(squares: Player[]) {
//     const lines = [
//         [0, 1, 2, 3],
//         [4, 5, 6, 7],
//         [8, 9, 10, 11],
//         [12, 13, 14, 15]
        
//     ];
//     for (let i = 0; i < lines.length; i++) {
//     const [a, b, c, d] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[d]) {
//         return squares[a];
//     }
//     }
//     return null;
// }

export default function Board() {
    // const [size, setSize] = useState(size);
    const size = 8;
    const [squares, setSquares] = useState(Array(size * size).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState<"X"|"O">(
        Math.round(Math.random() * 1) === 1 ? "X": "O"
    );
    const [winner, setWinner] = useState<Player>(null);

    function reset() {
        // setSize(6);
        setSquares(Array(size * size).fill(null));
        setWinner(null);
        setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O");
    }

    // const [winner, setWinner] = useState(null);
    function setSquareValue(index: number){
        const newData = squares.map((val, i) => {
            if (i === index){
                return currentPlayer;
            }
            return val;
        });
        setSquares(newData)
        setCurrentPlayer(currentPlayer === "X"? "O" : "X")
    }

    useEffect(() => {
        const w = calculateWinner(squares, size);
        if (w) {
          setWinner(w);
        }
    
        if (!w && !squares.filter((square) => !square).length) {
          setWinner("BOTH");
        }
    });

    return (
        <div>
            {!winner && <p>Hey {currentPlayer}, it's your turn</p>}
            {winner && winner !== "BOTH" && <p>Congratulations {winner}</p>}
            {winner && winner === "BOTH" && (
                <p>Congratulations you're both winners</p>
            )}
            <p>Hey {currentPlayer}, it's your turn</p>
            <button className="btn btn-blue">This is a demo square</button>
            <div className="board-grid">
            {Array(size * size).fill(null).map((_,i)=>{
                // return "X"
                return <Square
                    winner={winner}
                    key={i}
                    onClick={() => setSquareValue(i)}
                    value={squares[i]}
                />
            })}
            </div>
            <button className="reset" onClick={reset}>
                RESET
            </button>
        </div>
    )
}