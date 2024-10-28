
import { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setXTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  
  const renderSquare = (index) => {
    return (
      <button className='square' onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  
  const handleClick = (index) => {
    if (board[index] || winner) return; 
    const newBoard = [...board];
    newBoard[index] = isXTurn ? 'x' : 'o';
    setBoard(newBoard);
    setXTurn(!isXTurn);

    const winnerCombination = checkWinner(newBoard);
    if (winnerCombination) {
      setWinner(newBoard[winnerCombination[0]]); 
    }
  };

  
  const checkWinner = (newBoard) => {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < combinations.length; i++) {
      const [a, b, c] = combinations[i];
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return combinations[i];
      }
    }
    return null;
  };

  
  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setWinner(null); 
    setXTurn(true); 
  };

  return (
    <>
      <div className='board'>
        <div className='board-row'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className='board-row'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className='board-row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <button onClick={handleReset}>Reset</button>
      {winner && <div>{winner} is the Winner of this Game.</div>}
    </>
  );
};

export default TicTacToe;
