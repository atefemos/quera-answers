const weight = Number(readline());
const height = Number(readline());

const BMI = weight / (height * height);
console.log(BMI.toFixed(2));

if (BMI >= 30) {
  console.log("Obese");
} else if (BMI < 30 && BMI >= 25) {
  console.log("Overweight");
} else if (BMI < 25 && BMI >= 18.5) {
  console.log("Normal");
} else if (BMI < 18.5) {
  console.log("Underweight");
}
