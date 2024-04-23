// Loop through all numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    // Check if the number is divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    } 
    // Check if the number is divisible by 3
    else if (i % 3 === 0) {
        console.log("Fizz");
    } 
    // Check if the number is divisible by 5
    else if (i % 5 === 0) {
        console.log("Buzz");
    } 
    // If the number is not divisible by either 3 or 5
    else {
        console.log(i);
    }
}
