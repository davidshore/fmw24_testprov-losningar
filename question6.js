// 6a. Fetch och DOM (3p)
// Skriv en funktion, displayUserData, som hämtar data från
// https://jsonplaceholder.typicode.com/users med fetch och skapar en lista i HTML där
// varje användares namn och e-post visas som en <li>.

const ulElement = document.getElementById("list");

async function displayUserData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  data.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `${user.name} ${user.email}`;

    ulElement.appendChild(li);
  });
}

displayUserData();

const dropdown = document.getElementById("dropdown");
const emailEl = document.getElementById("email");

async function displayUserData2() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const selectEl = document.createElement("select");
  dropdown.appendChild(selectEl);

  data.forEach((user) => {
    const optionEl = document.createElement("option");

    optionEl.textContent = user.name;
    optionEl.value = user.name;

    selectEl.appendChild(optionEl);
  });

  selectEl.addEventListener("change", (event) => {
    const name = event.target.value;

    data.forEach((user) => {
      if (user.name == name) {
        emailEl.textContent = user.email;
      }
    });
  });
}

displayUserData2();

// 6b. Visa användare (3p)
// Hämta data från https://jsonplaceholder.typicode.com/users
// Visa varje användares namn i en drop down (select i HTML).
// När man väljer ett namn i listan så ska användarens e-post
// visas i en div.
