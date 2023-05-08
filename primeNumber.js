const a = Number(readline());
const b = Number(readline());

for (let i = a; i <= b; i++) {
  if (i == 1 || i == 0) continue;

  let flag = 1;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 0;
      break;
    }
  }
  flag === 1 && console.log(i);
}
