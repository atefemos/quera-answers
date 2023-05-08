const input = Number(readline());

let output = input;
let steps = 0;

while (output > 1) {
  if (output % 2 === 0) {
    output = output / 2;
    steps += 1;
  } else {
    output = output + 1;
    steps += 1;
  }
}

console.log(steps);
