function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('hidden');
    });

    const welcomeMessage = document.getElementById('welcomeMessage');
    if (welcomeMessage) {
        welcomeMessage.style.display = (sectionId === 'home') ? 'block' : 'none';
    }

    // Show only the selected section
    document.getElementById(sectionId).classList.remove('hidden');


    // Show only the selected section
    if (sectionId === 'home') {
        document.getElementById('home').classList.remove('hidden');
    } else if (sectionId === 'contact') {
        document.getElementById('contact').classList.remove('hidden');
    } else if (sectionId === 'about') {
        document.getElementById('about').classList.remove('hidden');
    } else if (sectionId === 'shoppingPage') {
        document.getElementById('shoppingPage').classList.remove('hidden');
    } else if (sectionId === 'productDetails') {
        document.getElementById('productDetails').classList.remove('hidden');
    } else if (sectionId === 'checkout') {
        document.getElementById('checkout').classList.remove('hidden');
    } else if (sectionId === 'thankYou') {
        document.getElementById('thankYou').classList.remove('hidden');
    }
}


function scrollToProducts() {
    document.getElementById('').scrollIntoView({ behavior: 'smooth' });
}


function showProduct(name, price, image) {
    document.getElementById('productName').innerText = name;
    document.getElementById('productPrice').innerText = '₹' + price;
    document.getElementById('productImage').src = image; // Fixed image display issue
    showSection('productDetails');
}


function goToCheckout() {
    // Transfer details from Product Details Page to Checkout Page
    document.getElementById('checkoutProduct').innerText = document.getElementById('productName').innerText;
    document.getElementById('checkoutPrice').innerText = document.getElementById('productPrice').innerText.replace('₹', '');
    document.getElementById('checkoutSize').innerText = document.getElementById('size').value;
    showSection('checkout');
}
function placeOrder() {
    let productName = document.getElementById('productName').innerText;
    let priceText = document.getElementById('productPrice').innerText;
    let price = parseFloat(priceText.replace('₹', '')); // Convert price to number
    let size = document.getElementById('size').value;

    if (!productName || !price) {
        alert("Error: No product selected!");
        return;
    }

    // Pass values to checkout page
    document.getElementById('checkoutProduct').innerText = productName;
    document.getElementById('checkoutPrice').innerText = price;
    document.getElementById('checkoutSize').innerText = size;

    showSection('checkout');
}
}
function payWithRazorpay() {
    let email = document.getElementById('paymentEmail').value;
    if (!email) {
        alert('Please enter your email');
        return;
    }
    alert('Redirecting to Razorpay...');
    // Razorpay payment gateway integration code should go here
}

function cashOnDelivery() {
    let email = document.getElementById('paymentEmail').value;
    if (!email) {
        alert('Please enter your email');
        return;
    }
    alert('Order placed successfully with Cash on Delivery!');
    showSection('thankYou'); // Show Thank You Page
}
