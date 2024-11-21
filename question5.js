// 5. Funktioner och Scope (3p)
// Skriv en funktion, calculateSum, som tar en array av nummer och returnerar summan av alla tal.
// Funktionen ska använda en lokal variabel för att lagra summan.

function calculateSum(arr) {
  let sum = 0;

  arr.forEach((num) => {
    sum += num;
  });

  return sum;
}

calculateSum([1, 2, 3, 4]); // Returnerar 10

module.exports = calculateSum;
