import logo from './logo.svg';
import './App.css';
import {fetchAsync} from './api.js'
import SudokuTable from './SudokuTable';
import { generate, clearTable } from './SudokuUtility';



function App() {

  async function readSudoku() {
    await fetchAsync('https://sugoku.herokuapp.com/board?difficulty=random').then((data) => {
      clearTable();
      generate(data.board);
    });
  }
  function clearGrid() {
    clearTable();
  }
  return (
    <div className="App">
      <p>Welcome to my big stinky</p>
        <button onClick={readSudoku}> Generate</button>
        <button onClick={clearGrid}> Clear</button>
        <SudokuTable/>
    </div>
  );
}


export default App;
