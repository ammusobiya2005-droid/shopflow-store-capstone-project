const app = document.getElementById("app");

function router() {
  const path = location.hash || "#/";

  switch (path) {
    case "#/products":
      renderProducts();
      break;

    case "#/cart":
      renderCart();
      break;

    default:
      renderHome();
  }
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);

function renderHome() {
  app.innerHTML = `
    <section class="hero">
      <h1>Welcome to ShopFlow Pro</h1>
      <p>Modern E-Commerce SPA with Vanilla JS</p>
    </section>
  `;
}
