// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.
for (let num = 0; num <= 100; num++) {
  if (num % 2 === 0) {
      console.log(num);
  }
}

// Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.
let i=1;
while(i<=100){
  console.log(i);
  i +=2;
}
// Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.

let j=3;
do{
  console.log(j);
  j +=3;

}while(j<=100);
// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.

function isPrime(num) {
  for(let i = 2; i <= Math.sqrt(num); i++) {
      if(num % i === 0) {
          return false;
      }
  }
  return num > 1;
}

// Iterate through numbers from 2 to 100 and print prime numbers
for(let i = 2; i <= 100; i++) {
  if(isPrime(i)) {
      console.log(i);
  }
}