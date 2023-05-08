let arr = [];
let i = 1;
while (i > 0) {
  i = readline();
  arr.push(i);
}
console.log(arr.reverse().slice(1).toString().replace(/,/g, "\n"));
