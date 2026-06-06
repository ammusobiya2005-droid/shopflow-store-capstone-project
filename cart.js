function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(id) {
  const cart = getCart();
  cart.push(id);
  saveCart(cart);
  alert("Added to cart!");
}

function renderCart() {
  const cart = getCart();

  app.innerHTML = `
    <h1>Your Cart 🛒</h1>
    ${cart.length === 0 ? "<p>Cart is empty</p>" : `
      <ul>
        ${cart.map(id => `<li>Product ID: ${id}</li>`).join("")}
      </ul>
    `}
  `;
}
