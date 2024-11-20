let cart = [];

function addToCart(courseName, coursePrice) {
    cart.push({ name: courseName, price: coursePrice });
    displayCart();
}

function displayCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = ''; // Clear current cart items

    let total = 0;
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.name} - $${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price;
    });

    document.getElementById('totalAmount').innerText = total;
}

function removeFromCart(index) {
    cart.splice(index, 1); // Remove item from cart by index
    displayCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    alert('Proceeding to checkout...');
    cart = []; // Clear the cart
    displayCart();
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        alert('Login successful!');
    } else {
        alert('Please enter valid credentials');
    }
});