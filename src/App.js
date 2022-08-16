import './App.css';
import {fetchAsync, postAsync} from './api.js'
import SudokuTable from './SudokuTable';
import { populateBoard, clearTable } from './SudokuUtility';
import React, { useState } from 'react';



function App() {
  const [board, setBoard] = useState();
  const [solution, setSolution] = useState();

  async function generateNewSudoku() {
    var boardResponse = await fetchAsync('https://sugoku.herokuapp.com/board?difficulty=random');
      clearTable();
      if (!boardResponse.board) {
        alert('something went wrong with generating the board');
      }
      setBoard(boardResponse.board);
      populateBoard(board);

      var solutionResponse = await postAsync('https://sugoku.herokuapp.com/solve', board);
      setSolution( solutionResponse.solution);
  }
  function solvePuzzle() {
    const options = [1,2,3,4,5,6,7,8,9];

  }
  function recursiveSolve(row, col) {
    
  }

  function clearGrid() {
    clearTable();
  }
  return (
    <div className="App">
      <p>Welcome to my big stinky</p>
        <button onClick={generateNewSudoku}> Generate</button>
        <button onClick={clearGrid}> Clear</button>
        <SudokuTable board={board} solution={solution}/>
        <button onClick={solvePuzzle}>Solve!</button>
    </div>
  );
}


export default App;
