const number = readline().split(" ");

const a = Number(number[0]);
const b = Number(number[1]);
const l = Number(number[2]);

sums = 0;

for (let i = 1; i < l + 1; i++) {
  if (i % 2 != 0) {
    sums += a;
  } else {
    sums += b;
  }
}

console.log(sums);
