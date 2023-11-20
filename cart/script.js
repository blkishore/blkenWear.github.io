// Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

// Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

// Moving animation event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

// Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  // Popout
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
});

// Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  //Popback
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});








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
    displayCart(); // Assuming you have a displayCart function to update the visual representation of the cart
    checkCartEmpty(); // Check if the cart is empty after removing an item
}


function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    let total = 0;

    cartContainer.innerHTML = '';

    if (cartItems.length === 0) {
        cartContainer.innerHTML = `
            <div class="cart-item">
                <p>Your cart is empty. <a href="../newseller/newseller.html">Go shopping</a></p>
            </div>
        `;
    } else {
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
    }

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






const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const types = ["info", "success", "error"];

const createNotification = () => {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(types[Math.floor(Math.random() * types.length)]);
  notif.innerText = "Order placed";
  toasts.appendChild(notif);
  setTimeout(() => notif.remove(), 3000);
};

button.addEventListener("click", createNotification);

