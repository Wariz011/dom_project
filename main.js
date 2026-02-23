const delete_button = document.querySelectorAll (".delete-btn")
const like_btn = document.querySelectorAll (".like-btn");
const minus_btn = document.querySelectorAll (".minus-btn");
const plus_btn = document.querySelectorAll(".plus-btn");
const Total = document.querySelectorAll (".total");
function updateTotal(){
    let total = 0;
    const card = document.querySelectorAll (".card");
    card.forEach(card => {
        const Unit_price = parseFloat(document.querySelectorAll ("unit-price"))
        const quantity = parseInt(card.querySelector(".quantity").innerText);
        total += Unit_price * quantity
    })
    Total.innerText = total;
}
updateTotal()
plus_btn.forEach(button => {
    button.addEventListener("click", function () {
        const quantitySpan = this.parentElement.querySelector(".quantity");
        quantitySpan.innerText = parseInt(quantitySpan.innerText) + 1;
        updateTotal();
    });
});
minus_btn.forEach(button => {
    button.addEventListener("click", function () {
        const quantitySpan = this.parentElement.querySelector(".quantity");
        let currentQuantity = parseInt(quantitySpan.innerText);

        if (currentQuantity > 1) {
            quantitySpan.innerText = currentQuantity - 1;
            updateTotal();
        }
    });
})
delete_button.forEach(button => {
    button.addEventListener("click", function () {
        this.closest(".card").remove();
        updateTotal();
    });
});
like_btn.forEach(button => {
    button.addEventListener("click", function () {
        this.classList.toggle("liked");
    });
});