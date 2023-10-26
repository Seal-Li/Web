const checkboxes = document.querySelectorAll(".checkbox");
const prices = document.querySelectorAll(".product-price");
const productQuantities = document.querySelectorAll(".product-quantity");
const totalPriceElement = document.getElementById("total-price");

function updateTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < checkboxes.length; i++) {
        const quantity = parseInt(productQuantities[i].value);
        const price = parseInt(prices[i].textContent.replace("￥", ""));
        
        // 仅计算被勾选的商品
        if (checkboxes[i].checked) {
            totalPrice += quantity * price;
        }

        totalPriceElement.textContent = `总价值: ￥${totalPrice}`;
        
    }

    // 更新总价值，确保总价与被勾选的商品一致
    totalPriceElement.textContent = `总价值: ￥${totalPrice}`;
}

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateTotalPrice);
});

productQuantities.forEach((quantityInput) => {
    quantityInput.addEventListener("input", updateTotalPrice);
});

const quantityButtons = document.querySelectorAll(".quantity-btn button");
quantityButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const input = event.target.parentElement.querySelector(".product-quantity");
        const value = parseInt(input.value);
        if (event.target.textContent === "+") {
            input.value = value + 1;
        } else if (event.target.textContent === "-" && value > 0) {
            input.value = value - 1;
        }
        updateTotalPrice();
    });
});

updateTotalPrice();
