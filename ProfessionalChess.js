const members = readline().split(" ");

const valid = [1, 1, 2, 2, 2, 8];

let output = [];

for (item in valid) {
  output.push(valid[item] - Number(members[item]));
}

console.log(output.toString().replace(/,/g, " "));
