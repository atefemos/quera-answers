const erfan1 = readline().split(" ");
const erfan2 = readline().split(" ");

const matin1 = readline().split(" ");
const matin2 = readline().split(" ");

count = 0;

if (
  erfan1[0] == matin1[0] ||
  erfan1[0] == matin2[0] ||
  erfan1[1] == matin1[1] ||
  erfan1[1] == matin2[1]
) {
  count = count + 1;
} else if (
  erfan2[0] == matin1[0] ||
  erfan2[0] == matin2[0] ||
  erfan2[1] == matin1[1] ||
  erfan2[1] == matin2[1]
) {
  count = count + 1;
}

if (count == 1) {
  console.log("happy");
} else {
  console.log("unhappy");
}
