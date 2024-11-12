/*
*CA 1
*@Vinícius Araújo
*09/11/24
*/

document.addEventListener('DOMContentLoaded', () => {
  // Select elements 
  const cartButton = document.getElementById('cart-button');
  const buyButtons = document.querySelectorAll('.buy-button');
  const cartItemsContainer = document.getElementById('cartItems');
  const clearCartButton = document.getElementById('clear-cart');
  const checkoutButton = document.getElementById('checkout');

  // Initialize objects
  let cart = { items: [], count: 0, total: 0 };

  // Format currency to Euro
  const formatCurrency = (value) => new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR' }).format(value);

  //Function for buyButton
  buyButtons.forEach(button => {
    button.addEventListener('click', (event) => addToCart(event));
  });

  // Function to add items
  function addToCart(event) {
    const card = event.target.closest('.card');
    const productTitle = card.querySelector('.card-title').innerText;
    const quantity = parseInt(card.querySelector('.quantity').value);
    const price = parseFloat(card.querySelector('.card-price').innerText.replace('Price: €', ''));

    // Check if the item already exists in the cart
    const item = cart.items.find(item => item.title === productTitle);
    if (item) {
      item.quantity += quantity;
    } else {
      cart.items.push({ title: productTitle, quantity, price });
    }

    // Update cart count and total price
    cart.count += quantity;
    cart.total += price * quantity;

    // Update the cart button display
    cartButton.textContent = `Cart (${cart.count})`;

    updateCartDisplay();
    alert(`${quantity}x ${productTitle} item(s) have been added to your cart.`);
  }
  if (cart.count > 0) {
    cartButton.textContent = `Cart (${cart.count})`;
    cartLogo.src = "Pictures/shopping_cart.svg";
  } else {
    cartButton.textContent = "Cart (0)";
    cartLogo.src = "Pictures/shopping_cart.svg";
  }

  // Function to update the cart display
  function updateCartDisplay() {
    cartItemsContainer.innerHTML = cart.items.length ?
      cart.items.map(item => `<p>${item.quantity}x ${item.title} - ${formatCurrency(item.price * item.quantity)}</p>`).join('') :
      '<p>Your cart looks empty!</p>';

    document.getElementById('total-price').textContent = `Total: ${formatCurrency(cart.total)}`;
  }

  // Clear cart button
  clearCartButton.addEventListener('click', () => {
    cart = { items: [], count: 0, total: 0 };
    cartButton.textContent = 'Cart (0)';
    updateCartDisplay();
  });

  // Checkout button 
  checkoutButton.addEventListener('click', () => {
    if (cart.items.length > 0) {
      alert('Your purchase was successful!');
      cart = { items: [], count: 0, total: 0 };
      cartButton.textContent = 'Cart (0)';
      updateCartDisplay();
    } else {
      alert('Your cart looks empty!');
    }
  });
});