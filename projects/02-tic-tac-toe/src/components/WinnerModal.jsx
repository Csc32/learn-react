import { Square } from "./Square";
export function WinnerModal({ winner, resetGame }) {
  if (winner == null) return null;
  const winnerText = winner === false ? "Draw" : "Win";
  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">
          {winner && <Square>{winner}</Square>}
          <footer>
            <button onClick={resetGame}>Reset Game</button>
          </footer>
        </header>
      </div>
    </section>
  );
}
