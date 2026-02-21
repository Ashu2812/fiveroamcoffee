let coffees = JSON.parse(localStorage.getItem("coffees")) || [
  {id:1, name:"Bison Valley Estate", notes:"Golden kiwi, white chocolate, mandarin orange", price:525},
  {id:2, name:"Stanmore Estate", notes:"Jaggery, dates, dark fruits, black currant", price:525},
  {id:3, name:"Hidden Falls Estate", notes:"Muscat grapes, hibiscus, dark chocolate", price:525},
  {id:4, name:"Orchardale Estate", notes:"Red currant, mandarin orange, honeysuckle", price:525},
  {id:5, name:"Bison Valley Brown Sugar", notes:"Brown sugar, berries, nuts", price:525},
  {id:6, name:"Moganad Estate", notes:"Mulberry, peach, palm sugar, dried fig", price:525},
  {id:7, name:"Stanmore Watermelon", notes:"Chocolatey, lavender, rose hip", price:525},
  {id:8, name:"Orchardale Hazelnut", notes:"Hazelnut, milk chocolate, honey, lime zest", price:525}
];

let cart = [];

function displayCoffees() {
  let list = document.getElementById("coffee-list");
  list.innerHTML = "";

  coffees.forEach(coffee => {
    list.innerHTML += `
      <div class="coffee-card">
        <h3>${coffee.name}</h3>
        <p>${coffee.notes}</p>
        <p>₹${coffee.price}</p>
        <button onclick="addToCart(${coffee.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(id) {
  let coffee = coffees.find(c => c.id === id);
  cart.push(coffee);
  updateCart();
}

function updateCart() {
  let itemsDiv = document.getElementById("cart-items");
  itemsDiv.innerHTML = "";

  let total = 0;
  cart.forEach(item => {
    total += item.price;
    itemsDiv.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
  });

  let discount = cart.length >= 2 ? total * 0.2 : 0;
  let final = total - discount;

  document.getElementById("total").innerText = total;
  document.getElementById("discount").innerText = discount;
  document.getElementById("final").innerText = final;
}

function checkout() {
  alert("Payment gateway will be integrated here (Razorpay/Stripe).");
}

displayCoffees();
