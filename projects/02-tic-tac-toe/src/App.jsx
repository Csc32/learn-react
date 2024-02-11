import { useState } from "react";
import { Square } from "./components/Square";
import { WinnerModal } from "./components/WinnerModal";
import { TURNS } from "./constants";
import { checkWinnerFrom, checkEndGame } from "./logic/board";
import confetti from "canvas-confetti";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  const updateBoard = (index) => {
    //dont update the position
    if (board[index] || winner) return;
    //update the board
    const newBoard = [...board];
    newBoard[index] = turn;

    setBoard(newBoard);
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;

    setTurn(newTurn);

    //set winner
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
      //TODO: check if game if over
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset game</button>
      <section className="game">
        {board.map((square, i) => {
          return (
            <Square key={i} index={i} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}> {TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}> {TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}
export default App;
