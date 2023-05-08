const line1 = readline().split(" ");
const line2 = readline().split(" ");
const line3 = readline().split(" ");
const line4 = readline().split(" ");
const line5 = readline().split(" ");
const line6 = readline().split(" ");
const line7 = readline().split(" ");
const line8 = readline().split(" ");
const line9 = readline().split(" ");

let myArr = [line1, line2, line3, line4, line5, line6, line7, line8, line9];

function isValid(board, row, col, k) {
  for (let i = 0; i < 9; i++) {
    const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const n = 3 * Math.floor(col / 3) + (i % 3);
    if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
      return false;
    }
  }
  return true;
}

function sudokuSolver(data) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] == "0") {
        for (let k = 1; k <= 9; k++) {
          if (isValid(data, i, j, k)) {
            data[i][j] = `${k}`;
            if (sudokuSolver(data)) {
              return data;
            } else {
              data[i][j] = "0";
            }
          }
        }
        return false;
      }
    }
  }
  return data;
}

const result = sudokuSolver(myArr);

console.log(
  `${result[0].toString().replace(/,/g, " ")}\n${result[1]
    .toString()
    .replace(/,/g, " ")}\n${result[2]
    .toString()
    .replace(/,/g, " ")}\n${result[3]
    .toString()
    .replace(/,/g, " ")}\n${result[4]
    .toString()
    .replace(/,/g, " ")}\n${result[5]
    .toString()
    .replace(/,/g, " ")}\n${result[6]
    .toString()
    .replace(/,/g, " ")}\n${result[7]
    .toString()
    .replace(/,/g, " ")}\n${result[8].toString().replace(/,/g, " ")}`
);
