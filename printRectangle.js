const number = Number(readline());

for (let i = 0; i < number; i++) {
  if (i === 0 || i === number - 1) {
    console.log("*".repeat(number));
  } else if (i != 0 || i != number - 1) {
    console.log("*" + " ".repeat(number - 2) + "*");
  }
}
