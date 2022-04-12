
export function clearTable () {
    var inputBoxes = document.querySelectorAll(".SudokuInput");

    inputBoxes.forEach(i => i.value = "");
}
export function generate(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] != 0) {
            let index = "" + i + j
            let inputValue = document.getElementById(index);
            inputValue.value = board[i][j];
          }
        }
      }
}