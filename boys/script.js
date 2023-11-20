function changeProductImage(productId) {
    const selectedColor = document.getElementById(productId + '-color').value.toLowerCase();
    const productImages = document.querySelectorAll('#' + productId + ' img');

    productImages.forEach(image => {
        if (image.id.includes(productId + '-image-') && image.id.toLowerCase().includes(selectedColor)) {
            image.style.display = 'inline';
        } else {
            image.style.display = 'none';
        }
    });
}

// Remove from cart function
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}


function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    let total = 0;

    cartContainer.innerHTML = '';
    cartItems.forEach((item, index) => {
        total += item.price;
        cartContainer.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name} image">
                <h3>${item.name}</h3>
                <p>Size: ${item.size}</p>
                <p>Color: ${item.color}</p>
                <p>Price: $${item.price}</p>
                <button onclick="removeFromCart(${index})">Remove from Cart</button>
            </div>
        `;
    });

    document.getElementById('total').innerText = `Total: $${total.toFixed(2)}`;
}

displayCart();



function addToCart(name, sizeId, colorId, price) {
    const selectedSize = document.getElementById(sizeId).value;
    const selectedColor = document.getElementById(colorId).value;
    let imageUrl;

    // Set the image URL based on the selected color
    if (selectedColor === 'Good Vibes Blue') {
        imageUrl = 'https://raw.githubusercontent.com/blkenWear/mens_tshirt_design/main/Goodvibes_Sky_Blue_L_Men_Round-removebg-preview.png';
    } else if (selectedColor === 'Good Vibes Red') {
        imageUrl = 'https://raw.githubusercontent.com/blkenWear/mens_tshirt_design/main/Goodvibes_Red_L_Men_Round.png';
    }else if (selectedColor === 'Strips Grey') {
        imageUrl = 'https://raw.githubusercontent.com/blkenWear/mens_tshirt_design/main/Strips_Melange_Grey_L_Men_Round.png';
    }else if (selectedColor === 'Strips Orange') {
        imageUrl = 'https://raw.githubusercontent.com/blkenWear/mens_tshirt_design/main/Strips_Orange_L_Men_Round.png';
    }else if (selectedColor === 'Panda Lavender') {
        imageUrl = 'https://raw.githubusercontent.com/blkenWear/mens_tshirt_design/main/front-6545cdc7e794e-Iris_Lavender_L_Men_Round.jpg';
    }else if (selectedColor === 'Panda Red') {
        imageUrl = 'https://raw.githubusercontent.com/blkenWear/mens_tshirt_design/main/front-6545cdb464ed2-Red_L_Men_Round.jpg';
    }else if (selectedColor === 'Hairy Cartoon Black') {
        imageUrl = 'https://raw.githubusercontent.com/blkenWear/mens_tshirt_design/main/Hairy_cartoon-Black_L_Men_Round.jpg';
    }else if (selectedColor === 'Hairy Cartoon Yellow') {
        imageUrl = 'https://raw.githubusercontent.com/blkenWear/mens_tshirt_design/main/Hairy_cartoon_Mustard_Yellow_L_Men_Round.jpg';
    }

    // Add more conditions for different colors if needed

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const item = {
        name: name,
        size: selectedSize,
        color: selectedColor,
        price: price,
        image: imageUrl // Assign the URL based on the selected color
    };

    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
}



// JavaScript to handle the visibility of card details based on selected payment method
const paymentMethodSelect = document.getElementById('payment-method');
const cardDetailsSection = document.getElementById('card-details');

paymentMethodSelect.addEventListener('change', function () {
    const selectedPaymentMethod = paymentMethodSelect.value;

    // Show card details section only if Visa or Mastercard is selected
    if (selectedPaymentMethod === 'Visa' || selectedPaymentMethod === 'Mastercard') {
        cardDetailsSection.style.display = 'block';
    } else {
        cardDetailsSection.style.display = 'none';
    }
});


<!-- Inside your script.js -->
function calculateTotal() {
    // Logic to calculate the total amount
    let totalAmount = 100; // Replace this with your total amount calculation

    return totalAmount;
}


