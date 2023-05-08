const inputs = readline().split(" ");
const inputYears = readline();

const rabbits = inputs[0];
const wolfs = inputs[1];

let allRabbits = rabbits;

for (let i = 0; i < inputYears; i++) {
  allRabbits = allRabbits * 2 - wolfs;
}
console.log(allRabbits);
