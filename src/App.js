import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import ScoreBoard from './components/ScoreBoard/ScoreBoard';
import Title from './components/Title/Title';
import Beetle from './components/Beetle/Beetle';

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
  const [gameMenu, setGameMenu] = useState(true);
  const [gameOn, setGameOn] = useState(true);
  const [modalOn, setModalOn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [activeSquare, setActiveSquare] = useState(true);
  const [turn, setTurn] = useState('X');
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winningSquares, setWinningSquares] = useState([]);
  const [score, setScore] = useState({
    X: 0,
    O: 0,
  });

  const reset = () => {
    setTurn('X');
    setSquares(Array(9).fill(null));
    setWinningSquares([]);
  }

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
    if(activeSquare === true){
      let newSquares = [...squares];
      newSquares.splice(square, 1, turn);
      setSquares(newSquares);
      checkForWinner(newSquares);
    }
  }

  const startGame = () => {
    setGameMenu(!gameMenu);
  }

  const handleGameOn = () =>{
    setGameOn(!gameOn);
    modalChangeClass();
  }

  const finishGame = () =>{
    startGame();
    handleGameOn();
    setModalOn(true);
    setScore({
      X:0,
      O:0,
    });
    setActiveSquare(true);
  }

  const modalChangeClass = () => {
    setModalOn(!modalOn)
  }

  const endGame = (result, winningPositions) => {
    setTurn(null);
    if(result !== null){
      setScore({
        ...score,
        [result]: score[result] + 1,
      })
      if(score[result] === 2){
        setTimeout(modalChangeClass, 2000);
        setActiveSquare(false);
        setWinner(result);
      }
     
    }

    setWinningSquares(winningPositions);
    setTimeout(reset, 2000);    
  }

  const reglas = 'El primer jugador coloca la ficha en cualquiera de los casilleros del tablero. El segundo har?? lo mismo con su primera ficha. Se contin??a las otras jugadas respetando los turnos, si el jugador consigue alinear tres marcas del mismo tipo, ese jugador hace ??TA???????TE???????TI! Cada vez que gane, el jugador obtiene un escarabajo para el Fara??n ??Consigue tres escarabajos para convertirte en el campe??n!';

  const winner_text = 'Has conseguido tres escarabajos para el Fara??n, ??Eres el nuevo campe??n de Egipto!'

  return (
    <div className="container">

      {gameMenu ? <div className='menu-container'><div className='beetle-container'><Beetle/><Beetle/></div><Title/><Button onClick={startGame} buttonTextContent={'INICIAR JUEGO'}/></div> 
      : gameOn ? <Modal modalStatus={modalOn} modalTitle={'REGLAS DEL JUEGO:'} modalText={reglas} onClick={handleGameOn} buttonTextContent={'Entendido'}/> :
      <>
      <Board winningSquares={winningSquares} turn={turn} squares={squares} onClick={handleClick}/>
      <ScoreBoard scoreO={score.O} scoreX={score.X}/>
      <Modal modalStatus={modalOn} modalTitle={`??Felicitaciones jugador ${winner}!`} modalText={winner_text} onClick={finishGame} buttonTextContent={'Volver a inicio'}/></>}
    </div>
  );
}

export default App;
