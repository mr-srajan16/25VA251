// Featured and All Products
const products = [
{ name: "HP Victus AMD Ryzen 7, 6GB RTX 4050, 16GB", price: "₹79,900", image: "https://m.media-amazon.com/images/I/71r2ySSfgBL._SY450_.jpg", category: "Laptops" },
{ name: "boAt Nirvana Zenith Pro (2025), 50dB Hybrid ANC, Spatial Audio", price: "₹2,999", image: "https://m.media-amazon.com/images/I/41QwSzPBJOL._SY300_SX300_QL70_FMwebp_.jpg", category: "Electronics" },
{ name: "Logitech G502 Hero High Performance Wired Gaming Mouse", price: "₹2,799", image: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UY327_FMwebp_QL65_.jpg", category: "Electronics" },
{ name: "MSI Crosshair A16, Ryzen 9, RTX 5060, 16GB/1TB NVMe", price: "₹1,24,990", image: "https://m.media-amazon.com/images/I/51EWytLLqAL._SY450_.jpg", category: "Laptops" },
{ name: "Wembley Rock Crawler Monster Truck Remote Control Car", price: "₹2,499", image: "https://m.media-amazon.com/images/I/41YNE+k+oEL._SY300_SX300_QL70_FMwebp_.jpg", category: "Toys" },
{ name: "Y39 5G (Lotus Purple, 8GB RAM, 128GB Storage)", price: "₹15,999", image: "https://m.media-amazon.com/images/I/51Kk6rjcOXL._SX425_.jpg", category: "Mobiles" },
{ name: "Nike Downshifter 13 Running Shoes", price: "₹4,295", image: "https://m.media-amazon.com/images/I/6149-ZNfTKL._SY535_.jpg", category: "Fashion" },
{ name: "Samsung Galaxy S25 Ultra 5G AI Smartphone", price: "₹1,50,999", image: "https://m.media-amazon.com/images/I/71rs4Aer71L._SX425_.jpg", category: "Mobiles" },
{ name: "Tommy Hilfiger Multifunction Navy Dial Stainless Steel Watch", price: "₹10,999", image: "https://m.media-amazon.com/images/I/51bbLkXsL1L._SX679_.jpg", category: "Fashion" },
{ name: "Marshall Kilburn II 36W Portable Bluetooth Speaker", price: "₹21,999", image: "https://m.media-amazon.com/images/I/31RnuvCDlhL._SX300_SY300_QL70_FMwebp_.jpg", category: "Electronics" },
{ name: "NEXA Fronx Compact SUV", price: "₹8,67,000", image: "https://img.autocarindia.com/mmv_images/colors/20250620010815_Maruti_Suzuki_Fronx_Opulent_Red[1].jpg?w=640&q=75", category: "Automotive" },
{ name: "Voltas Vectra Elite 2 Ton 3 Star Inverter Split AC", price: "₹46,990", image: "https://m.media-amazon.com/images/I/61nv5TqjBoL._SX466_.jpg", category: "Appliances" },
{ name: "Logitech G102 USB LightSync Gaming Mouse with RGB", price: "₹1,499", image: "https://m.media-amazon.com/images/I/61RYwHoeHjL._AC_UY327_FMwebp_QL65_.jpg", category: "Electronics" },
{ name: "Havells Aqua Plus Electric Kettle 1.2 Litre, 1250W", price: "₹1,499", image: "https://m.media-amazon.com/images/I/31S74o1sCSS._SX300_SY300_QL70_FMwebp_.jpg", category: "Appliances" },
{ name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones", price: "₹24,990", image: "https://m.media-amazon.com/images/I/71TtTKwu0PL._SY606_.jpg", category: "Electronics" },
{ name: "Tommy Hilfiger Men Black Dial Quartz Multifunction Watch", price: "₹14,299", image: "https://m.media-amazon.com/images/I/71TtTKwu0PL._SY741_.jpg", category: "Fashion" },
{ name: "Samsung 653L 3 Star Frost Free Double Door Fridge", price: "₹79,499", image: "https://m.media-amazon.com/images/I/61Cblx5LWAL._SX466_.jpg", category: "Appliances" },
{ name: "Realme Neckband Pro Bluetooth Earphones with ENC", price: "₹1,299", image: "https://m.media-amazon.com/images/I/31K5oAhDs3L._SY300_SX300_QL70_FMwebp_.jpg", category: "Electronics" }
];

// Render Products Call
const productSection = document.querySelector(".products");
function renderProducts(list, container) {
for(let i = 0; i < list.length; i++) {
container.innerHTML += `<div class="product">
           <img src="${list[i].image}" alt="${list[i].category}">
           <h3>${list[i].name}</h3>
           <p class="price">${list[i].price}</p>
           <div class="btn-group">
               <button class="btn-cart">Add to Cart</button>
               <button class="btn-buy">Buy Now</button>
           </div>
       </div>`;
}
}

// Shuffle Logic
function shuffle(array) {
for (let i = array.length - 1; i > 0; i--) {
let j = Math.floor(Math.random() * (i + 1));
let t = array[i];
array[i] = array[j];
array[j] = t;
}
return array;
}
shuffle(products);
const featuredProducts=products.slice(0,5);
const featuredSection=document.querySelector(".featuredProducts");
renderProducts(featuredProducts,featuredSection);
renderProducts(products,productSection);

// Cart Counter
let count=0;
const cartCount =document.querySelector("#cartCount");
document.querySelectorAll(".btn-cart").forEach(function(btn){
btn.addEventListener("click",function(){
count++;
cartCount.textContent=count;
alert("Added to cart: ");
});
});

// Searching Feature
const result=document.querySelector(".search-box input");
result.addEventListener("input",function(){
const featuredproduct=document.querySelector(".featuredProducts");
const featuredtitle=document.querySelector(".featured-title");
if(result.value !== "") {
featuredtitle.style.display="none";
featuredproduct.style.display="none";
} else {
featuredtitle.style.display="block";
featuredproduct.style.display="grid";
}
const cards = document.querySelectorAll(".product");
for(let x=0;x<cards.length;x++){
if(cards[x].querySelector("h3").textContent.toLowerCase().includes(result.value.toLowerCase())){
console.log(result);
cards[x].style.display="block";
}
else{
console.log("try again");
cards[x].style.display="none";
}
}

});

//SLIDESHOW LOGIC
let slideIndex = 0;
let autoPlayTimer;

showSlide(slideIndex);
startAutoPlay();

function showSlide(index) {
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");

if (index >= slides.length) slideIndex = 0;
if (index < 0) slideIndex = slides.length - 1;

for (let i = 0; i < slides.length; i++) {
slides[i].classList.remove("active");
dots[i].classList.remove("active");
}

slides[slideIndex].classList.add("active");
dots[slideIndex].classList.add("active");
}

function plusSlides(n) {
clearTimeout(autoPlayTimer); 
slideIndex += n;
showSlide(slideIndex);
startAutoPlay();
}

function goToSlide(index) {
clearTimeout(autoPlayTimer);
slideIndex = index;
showSlide(slideIndex);
startAutoPlay();
}

function startAutoPlay() {
autoPlayTimer = setTimeout(function () {
slideIndex++;
showSlide(slideIndex);
startAutoPlay();
}, 5000);
}

// Dark Mode
const darkBtn = document.querySelector("#darkModeBtn");
darkBtn.addEventListener("click", function() {
document.body.classList.toggle("dark-mode");
if(document.body.classList.contains("dark-mode")) {
darkBtn.textContent = "☀️";
localStorage.setItem("theme", "dark");
} else {
darkBtn.textContent = "🌙";
localStorage.removeItem("theme");
}
});
if(localStorage.getItem("theme") === "dark") {
document.body.classList.add("dark-mode");
darkBtn.textContent = "☀️";
}
//Scroll to Top button
const backToTopBtn=document.querySelector("#back-to-top");
window.addEventListener("scroll", function() {
    if(window.scrollY > 400) {
        backToTopBtn.style.display="block";
    } else {
        backToTopBtn.style.display="none"
    }
    backToTopBtn.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
});
});