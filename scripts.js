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

// Function to clear cart
function clearCart() {
    cart = [];
    updateCart();
}

// Reservation handling
function handleReservation(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    const reservationDetails = {
        name: formElements[0].value,
        email: formElements[1].value,
        date: formElements[2].value,
        time: formElements[3].value,
        partySize: formElements[4].value
    };
    console.log("Reservation Details:", reservationDetails);
    alert('Reservation made successfully!');
    event.target.reset();
}

// Payment handling
function handlePayment(event) {
    event.preventDefault();
    const paymentDetails = {
        cardNumber: event.target.elements[0].value,
        expiry: event.target.elements[1].value,
        cvv: event.target.elements[2].value
    };
    console.log("Payment Details:", paymentDetails);
    alert('Payment processed successfully!');
    cart = []; // Clears the cart
    updateCart();
    event.target.reset();
}

// Review handling
function handleReview(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    const reviewDetails = {
        name: formElements[0].value,
        rating: formElements[1].value,
        review: formElements[2].value
    };
    console.log("Review Details:", reviewDetails);
    alert('Thank you for your review!');

    const reviewsContainer = document.querySelector('.reviews-container');
    reviewsContainer.innerHTML += `<div class="review">
        <div class="stars">${'★'.repeat(reviewDetails.rating) + '☆'.repeat(5 - reviewDetails.rating)}</div>
        <p>"${reviewDetails.review}"</p>
        <small>- ${reviewDetails.name}</small>
    </div>`;

    event.target.reset();
}
