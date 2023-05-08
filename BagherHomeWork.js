const g = readline().split(" ");

if (+g[0] + +g[1] + +g[2] === 180 && +g[0] != 0 && +g[1] != 0 && +g[2] != 0) {
  console.log("Yes");
} else {
  console.log("No");
}
