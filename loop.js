let number = prompt("Kis number ka table chahiye?");

number = parseInt(number); // Convert input to a number

if (!isNaN(number)) {
  console.log(`Table of ${number}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
} else {
  console.log("Please enter a valid number.");
}