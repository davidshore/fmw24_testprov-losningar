//7. Random Numbers (3p)
// Skriv en funktion, generateRandomNumbers, som genererar en array med 10
// slumpmässiga heltal mellan två angivna gränser.

function generateRandomNumbers(min, max) {
  const numbers = [];

  for (let i = 0; i < 10; i++) {
    const rand = Math.random(); // 0 -> 0.99999999
    const rand2 = rand * (max - min + 1); // (max = 10  min = 4  => 7) 0 -> 6.999999
    const rand3 = Math.floor(rand2) + min; // 0 -> 6 + 4  =>  4 -> 10

    numbers.push(rand3);
  }
  return numbers;
}

// generateRandomNumbers(1, 100);
// Returnerar exempelvis: [5, 67, 34, 12, 89, 45, 23, 78, 56, 90]

module.exports = generateRandomNumbers;
