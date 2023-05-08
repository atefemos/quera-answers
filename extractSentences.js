const num = Number(readline());

const sentences = readline().split(" ");

let out = "";
for (item of sentences) {
  c = item.length;
  if (out.length < item.length) {
    c = out.length;
  }
  q = -1;
  for (let i = c; i >= 0; i--) {
    if (item.slice(0, i) == out.slice(out.length - i, out.length)) {
      q = i;
      return out + item.slice(q, item.length);
    }
  }
  return out + item;
}

console.log(out);
