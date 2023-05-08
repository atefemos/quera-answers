const num = Number(readline());
const temp = readline().split(" ");

for (let i = 0; i < num; i++) {
  if (temp[i] > 15) {
    console.log("cooler");
  } else {
    console.log("heater");
  }
}
