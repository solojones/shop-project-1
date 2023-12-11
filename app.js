let addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
let productsCountEl = document.querySelector(".cart-num");

console.log(addToCartBtns);
console.log(productsCountEl);

// for (let i = 0; i < addToCartBtns.length; i++) {
//     addToCartBtns[i].addEventListener("click", function () {
//         console.log("clicked");
//     });
// }

addToCartBtns.forEach((item) =>
    item.addEventListener("click", function () {
        let prevProductsCount = +productsCountEl.textContent;
        productsCountEl.textContent = prevProductsCount + 1;
    }));