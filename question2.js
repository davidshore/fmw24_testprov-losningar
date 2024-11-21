// 2. Variabler och Strängar (3p)
// Skriv en funktion, capitalizeFirstLetters, som tar en sträng som input
// och returnerar en ny sträng där första bokstaven i varje ord är stor bokstav.

function capitalizeFirstLetters(str) {
  // let str = "webbutveckling är kul";

  let nextBigLetter = true;
  let resStr = "";
  for (let i = 0; i < str.length; i++) {
    if (nextBigLetter) {
      resStr += str[i].toLocaleUpperCase();
      nextBigLetter = false;
    } else {
      resStr += str[i];
    }
    if (str[i] == " ") {
      nextBigLetter = true;
    }
  }
  return resStr;
}

function capitalizeFirstLetters2(str) {
  const arr = str.split(" ");

  const arrCapital = arr.map((word) => {
    const first = word.substring(0, 1).toUpperCase();
    const rest = word.substring(1);
    return first + rest;
  });

  return arrCapital.join(" ");
}

const res = capitalizeFirstLetters2("webbutveckling är kul");

console.log("res", res);

capitalizeFirstLetters("webbutveckling är kul"); // Returnerar "Webbutveckling Är Kul"

module.exports = capitalizeFirstLetters;
