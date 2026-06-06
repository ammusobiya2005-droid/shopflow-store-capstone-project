async function renderProducts() {
  app.innerHTML = "<p>Loading products...</p>";

  try {
    const res = await fetch("data/products.json");
    const products = await res.json();

    app.innerHTML = `
      <h1>Products</h1>
      <div class="grid">
        ${products.map(p => `
          <div class="card">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="addToCart(${p.id})">
              Add to Cart
            </button>
          </div>
        `).join("")}
      </div>
    `;
  } catch (err) {
    app.innerHTML = "<p>Error loading products</p>";
  }
}
