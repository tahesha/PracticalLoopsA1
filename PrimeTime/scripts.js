// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to find the next prime number starting from n
function findNextPrime(n) {
    while (true) {
        if (isPrime(n)) {
            return n;
        }
        n++;
    }
}

// Declare an arbitrary number, n
const n = 4;

// Find the next prime number starting from n
const nextPrime = findNextPrime(n);

// Log the next prime number
console.log(`The next prime number after ${n} is: ${nextPrime}`);
