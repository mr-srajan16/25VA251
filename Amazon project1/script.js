// Array of real product data
const products = [
    {
        id: 1,
        title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
        price: "59.99",
        image: "Amazon project1\hard drive.jpg",
        rating: 4.8,
        reviews: "1,245"
    },
    {
        id: 2,
        title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: "109.00",
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        rating: 4.6,
        reviews: "3,112"
    },
    {
        id: 3,
        title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        price: "599.00",
        image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        rating: 4.5,
        reviews: "420"
    },
    {
        id: 4,
        title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
        price: "999.99",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        rating: 4.7,
        reviews: "8,921"
    },
    {
        id: 5,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: "109.95",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: 4.2,
        reviews: "120"
    },
    {
        id: 6,
        title: "Mens Casual Premium Slim Fit T-Shirts",
        price: "22.30",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: 4.1,
        reviews: "2,051"
    },
    {
        id: 7,
        title: "Mens Cotton Jacket",
        price: "55.99",
        image: "https://fakestoreapi.com/img/71li-ujtlVG._AC_UX679_.jpg",
        rating: 4.4,
        reviews: "84"
    },
    {
        id: 8,
        title: "Mens Casual Slim Fit",
        price: "15.99",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        rating: 4.0,
        reviews: "192"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-container');
    let cartCount = 0;
    const cartCountElement = document.getElementById('cart-count');

    // Function to generate star icons based on rating
    const getStars = (rating) => {
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                starsHtml += '<i class="fas fa-star"></i>';
            } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
                starsHtml += '<i class="fas fa-star-half-alt"></i>';
            } else {
                starsHtml += '<i class="far fa-star"></i>';
            }
        }
        return starsHtml;
    };

    // Render products
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const [dollars, cents] = product.price.split('.');

        productCard.innerHTML = `
            <div class="product-title">${product.title.length > 50 ? product.title.substring(0, 50) + '...' : product.title}</div>
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-rating">
                ${getStars(product.rating)}
                <span>${product.reviews}</span>
            </div>
            <div class="product-price">
                <span>$</span>${dollars}<span>.${cents ? cents : '00'}</span>
            </div>
            <button class="add-to-cart-btn">Add to cart</button>
        `;

        // Add event listener to the button
        const addToCartBtn = productCard.querySelector('.add-to-cart-btn');
        addToCartBtn.addEventListener('click', () => {
            cartCount++;
            cartCountElement.textContent = cartCount;
            addToCartBtn.textContent = 'Added';
            addToCartBtn.style.backgroundColor = '#f7ca00';
            setTimeout(() => {
                addToCartBtn.textContent = 'Add to cart';
                addToCartBtn.style.backgroundColor = '#ffd814';
            }, 1000);
        });

        productContainer.appendChild(productCard);
    });

    // Back to top functionality
    const backToTopBtn = document.getElementById('back-to-top');
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});