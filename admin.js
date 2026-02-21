let coffees = JSON.parse(localStorage.getItem("coffees")) || [];

function displayAdmin() {
  let div = document.getElementById("admin-list");
  div.innerHTML = "";

  coffees.forEach(c => {
    div.innerHTML += `<p>${c.name} - ₹${c.price}</p>`;
  });
}

function addCoffee() {
  let name = document.getElementById("name").value;
  let notes = document.getElementById("notes").value;
  let price = parseInt(document.getElementById("price").value);

  let newCoffee = {
    id: Date.now(),
    name,
    notes,
    price
  };

  coffees.push(newCoffee);
  localStorage.setItem("coffees", JSON.stringify(coffees));
  displayAdmin();
}

displayAdmin();
