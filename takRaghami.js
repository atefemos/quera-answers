const number = readline().split("");

const fun = (n) => {
  let x = n.reduce((total, num) => {
    return Number(total) + Number(num);
  });
  if (x.toString().length > 1) {
    fun(x.toString().split(""));
  } else {
    console.log(x);
  }
};

if (number.length > 1) {
  fun(number);
} else {
  console.log(number);
}
