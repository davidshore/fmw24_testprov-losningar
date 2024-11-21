// 3. JavaScript - Arrayer (3p)
// Skriv en funktion, filterEvenNumbers, som tar en array av tal och returnerar
// en ny array med bara jämna tal.

function filterEvenNumbers(arr) {
  return arr.filter((num) => {
    return num % 2 == 0;
  });
}

filterEvenNumbers([1, 2, 3, 4, 5]); // Returnerar [2, 4]

module.exports = filterEvenNumbers;
