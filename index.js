process.stdin.resume();
process.stdin.setEncoding("utf8");

console.log("Enter your age?");
process.stdin.on("data", (age) => {
  if (typeof Number(age) === "number") {
    const text = "Must be a number! Try again!!";
    console.log(text);
  } else if (age < 1 || age > 99) {
    const text = "The number must be between zero and 99! Try again!!";
    console.log(text);
  } else {
    let date = new Date();
    let year = date.getFullYear();
    let yourYearOfBirth = year - age;
    console.log(yourYearOfBirth);
  }
  process.exit();
});
