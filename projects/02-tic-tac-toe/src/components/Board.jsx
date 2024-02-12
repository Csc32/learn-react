import { useState } from "react";
import { Game } from "../components/Game";
import { TurnBoard } from "../components/TurnBoard";
import { WinnerModal } from "../components/WinnerModal";
import { TURNS } from "../constants";
import { checkWinnerFrom, checkEndGame } from "../logic/board";
import confetti from "canvas-confetti";
import { saveGameStorage, resetGameStorage } from "../logic/storage";
export function Board() {
  const [board, setBoard] = useState(() => {
    //you need to save in localStorage inside the stage because read from localStorage is very slow
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X;
  });
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    resetGameStorage();
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
    //save the game
    saveGameStorage({ board: newBoard, turn: newTurn });
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
      <Game board={board} updateBoard={updateBoard} />
      <TurnBoard turn={turn} />
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}
