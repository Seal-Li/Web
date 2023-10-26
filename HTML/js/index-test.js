const checkboxes = document.querySelectorAll(".checkbox");
const prices = document.querySelectorAll(".product-price");
const productQuantities = document.querySelectorAll(".product-quantity");
const totalPriceElement = document.getElementById("total-price");

function updateTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < checkboxes.length; i++) {
        let quantity = parseInt(productQuantities[i].value) || 0;
        const price = parseInt(prices[i].textContent.replace("￥", ""));
        // 仅计算被勾选的商品
        if (checkboxes[i].checked) {
            totalPrice += quantity * price;
        }
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
        let value = parseInt(input.value) || 0;
        if (event.target.textContent === "+") {
            value++;
        } else if (event.target.textContent === "-" && value > 0) {
            value--;
        }
        input.value = value;
        updateTotalPrice();
    });
});

const deleteButtons = document.querySelectorAll(".delete-label");
deleteButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        // 删除对应的商品元素
        const item = button.parentElement;
        item.remove();
        productQuantities[index].value = "0"; // 重置对应商品的数量为0
        updateTotalPrice(); // 更新总价值
    });
});

updateTotalPrice();
