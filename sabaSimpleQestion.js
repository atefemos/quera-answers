const input = readline().split(" ");

let output = input[0];

for (let i = 0; i < Number(input[1]); i++) {
  output = output / 2;
}

console.log(Math.floor(output));
