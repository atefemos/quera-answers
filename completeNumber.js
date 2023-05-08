const input = Number(readline());

function sumDivisors(num) {
  var sum = 0;
  for (var i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum;
}

if (sumDivisors(input) === input) {
  console.log("YES");
} else {
  console.log("NO");
}
