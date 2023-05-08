const inputs = readline().split(" ");

const mouse = inputs[0];
const hole = inputs[1];

if (mouse === hole) {
  console.log("Saal Noo Mobarak!");
} else if (hole > mouse) {
  let num = Number(hole) - Number(mouse);
  console.log("R".repeat(num));
} else if (mouse > hole) {
  let num = Number(mouse) - Number(hole);
  console.log("L".repeat(num));
}
