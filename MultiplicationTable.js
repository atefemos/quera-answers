const number = readline();

for (let i = 1; i <= number; i++) {
  let myArr = [];
  for (let j = 1; j <= number; j++) {
    myArr.push(j * i);
  }
  console.log(myArr.toString().replace(/,/g, " "));
}
