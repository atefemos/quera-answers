const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", clicked);
});

function clicked(e) {
  const color = e.target.id;

  document.body.style.backgroundColor = color;
}
