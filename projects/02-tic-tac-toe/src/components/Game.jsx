import { Square } from './Square';
export function Game({ board, updateBoard }) {
  return (
    <section className="game">
      {board.map((square, i) => {
        return (
          <Square key={i} index={i} updateBoard={updateBoard}>
            {square}
          </Square>
        );
      })}
    </section>
  );
}
