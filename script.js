// =====================================
// Zainab.Store JavaScript
// Version 1.0
// =====================================

console.log("Welcome to Zainab.Store");

// Cart Count
let cartCount = 0;

// Cart Icon
const cartCounter = document.querySelector(".cart-count");

// Add To Cart Buttons
const cartButtons = document.querySelectorAll(".cart-btn");

// Add Event
cartButtons.forEach((button) => {

    button.addEventListener("click", () => {

        cartCount++;

        if (cartCounter) {
            cartCounter.textContent = cartCount;
        }

        button.innerHTML = "✔ Added";

        button.style.background = "#22c55e";

        setTimeout(() => {

            button.innerHTML = "Add To Cart";

            button.style.background = "#7c3aed";

        }, 1000);

    });

});
// Mobile Menu

const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}
// ==============================
// Product Search
// ==============================

const searchInput = document.querySelector(".search-box input");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const products = document.querySelectorAll(".product-card");

        products.forEach((product) => {

            const title = product.querySelector("h3").textContent.toLowerCase();

            if (title.includes(value)) {

                product.style.display = "block";

            } else {

                product.style.display = "none";

            }

        });

    });

}
// Wishlist

const wishlistIcons = document.querySelectorAll(".wishlist-icon");

wishlistIcons.forEach((icon)=>{

    icon.addEventListener("click",()=>{

        icon.classList.toggle("active");

        if(icon.classList.contains("active")){

            icon.innerHTML='<i class="fa-solid fa-heart"></i>';

        }else{

            icon.innerHTML='<i class="fa-regular fa-heart"></i>';

        }

    });

});
