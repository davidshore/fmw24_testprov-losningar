// 4. JavaScript - Objekt (3p)
// Skriv en funktion, updateCarSpeeds, som tar en array av bilar (med typ och hastighet)
// och returnerar en ny array där alla bilar har speed: 100.

function updateCarSpeeds(cars) {
  const carsWith100Speed = cars.map((car) => {
    return { ...car, speed: 100 };
  });

  return carsWith100Speed;
}

const cars = [
  { type: "Volvo", speed: 50 },
  { type: "Ford", speed: 80 },
];
updateCarSpeeds(cars);
// Returnerar: [{ type: "Volvo", speed: 100 }, { type: "Ford", speed: 100 }]

module.exports = updateCarSpeeds;
