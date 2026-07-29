let cart = 0;

const buttons = document.querySelectorAll(".product button");
const cartCount = document.getElementById("cartCount");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    cart++;
    cartCount.textContent = cart;
    alert("Product added to cart!");
  });
});

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {
  const filter = searchInput.value.toLowerCase();
  const products = document.querySelectorAll(".product");

  products.forEach(product => {
    const name = product.querySelector("h3").textContent.toLowerCase();

    if (name.includes(filter)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
const wishlistButtons = document.querySelectorAll(".wishlist");

wishlistButtons.forEach(button => {
  button.addEventListener("click", () => {
    alert("❤️ Added to Wishlist!");
  });
});
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    document.getElementById("loginMessage").textContent =
      "Welcome, " + email + "!";
  });
}
