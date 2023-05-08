const entrance = Number(readline());

const interaction = Number(readline());

let i = 0;
let interactions = [];

while (i < interaction) {
  interactions.push(readline().split(" "));
  i++;
}

let findDuplicates = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) !== index);
function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

let result = [];

for (let item of interactions) {
  let out = item;
  for (let j = 0; j < 1; j++) {
    let first = interactions.filter((el) => el.includes(item[j]));
    let sec = interactions.filter((el) => el.includes(item[j + 1]));
    let g = [].concat(...first).filter((i) => i != item[j]);
    let k = [].concat(...sec).filter((i) => i != item[j + 1]);
    out.push(findDuplicates(g.concat(k)));
    let sortedOut = out.sort();
    findDuplicates(g.concat(k)).length > 0 && result.push(sortedOut.toString());
  }
}
console.log(removeDuplicates(result));
