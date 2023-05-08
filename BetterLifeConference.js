const input = readline().split(" ");

const col = parseInt(input[0]);
const row = parseInt(input[1]);

let a;
let b = col;

if (row <= 10) {
  a = Math.abs(11 - col);
  console.log(`Right ${a} ${b}`);
} else {
  a = Math.abs(11 - col);
  b = Math.abs(21 - row);
  console.log(`Left ${a} ${b}`);
}
