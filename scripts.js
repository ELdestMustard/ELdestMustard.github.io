let cart = [];

// Function to add item to cart
function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    updateCart();
}

// Function to update cart display
function updateCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item) => {
        total += item.price;
        cartItemsContainer.innerHTML += `<div class="cart-item">
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
        </div>`;
    });

    document.getElementById('cart-total').innerHTML = `Total: $${total.toFixed(2)}`;
    showCartPopUp();
}

// Function to show cart popup
function showCartPopUp() {
    document.getElementById('cart-popup').style.display = 'block';
}

// Function to proceed to checkout
function proceedToCheckout() {
    localStorage.setItem('cart', JSON.stringify(cart)); // Store cart in local storage
    window.location.href = 'cart.html'; // Redirect to cart page
}

// Function to clear cart
function clearCart() {
    cart = [];
    updateCart();
}

// Function to load cart items on checkout page
function loadCartItems() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        updateCartDisplayOnCheckout();
    }
}

// Function to display cart items on checkout
function updateCartDisplayOnCheckout() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item) => {
        total += item.price;
        cartItemsContainer.innerHTML += `<div class="cart-item">
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
        </div>`;
    });

    document.getElementById('cart-total').innerHTML = `Total: $${total.toFixed(2)}`;
}

// Call loadCartItems on cart.html load
if (window.location.pathname.endsWith('cart.html')) {
    loadCartItems();
}
