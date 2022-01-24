import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';

const winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];


const App = () => {
  const [turn, setTurn] = useState('X');
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [score, setScore] = useState({
    X: 0,
    O: 0,
  });

  const checkForWinner = newSquares => {
    for(let i=0; i < winningPositions.length; i++){
      const [a,b,c] = winningPositions[i];
      if(newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]){
        /* Hay un ganador */
        endGame(newSquares[a], winningPositions[i]);
        return
      }
    }
    if(!newSquares.includes(null)){
      /* Es un empate */
      endGame(null, Array.from(Array(10).keys()));
      return
    }
    setTurn(turn === 'X' ? 'O' : 'X');
  }

  const handleClick = square => {
    let newSquares = [...squares];
    newSquares.splice(square, 1, turn);
    setSquares(newSquares);
    checkForWinner(newSquares);
  }

  const endGame = (result, winningPositions) => {
    setTurn(null);

  }


  return (
    <div className="container">
      <Board turn={turn} squares={squares} onClick={handleClick}/>
    </div>
  );
}

export default App;
