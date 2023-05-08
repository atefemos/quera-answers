const number = readline().split("");

for (item of number) {
  let result = item;
  if (result == 0) {
    result = "";
  } else {
    result = item.repeat(item);
  }

  console.log(item + ": " + result);
}
