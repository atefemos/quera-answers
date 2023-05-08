const score = Number(readline());
const trip = Number(readline());

if (trip == 0) {
  console.log(20);
} else if (trip === 7) {
  console.log(score);
} else {
  let remainScore = score - trip;
  console.log(remainScore <= 0 ? 0 : remainScore);
}
