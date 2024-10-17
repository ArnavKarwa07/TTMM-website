document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("order-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const productName = document.getElementById("product-name").value;
        const category = document.getElementById("category").value;
        const price = parseFloat(document.getElementById("price").value);
        const quantity = parseInt(document.getElementById("quantity").value);
        const totalPrice = price * quantity;

        // Send order to the server via AJAX
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "save_general_order.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onload = function () {
            if (xhr.status === 200) {
                document.getElementById("order-summary").innerHTML = `
                    <p>Order placed successfully!</p>
                    <p>Product: ${productName}</p>
                    <p>Category: ${category}</p>
                    <p>Price: ${price}</p>
                    <p>Quantity: ${quantity}</p>
                    <p>Total Price: ${totalPrice}</p>
                `;
            }
        };

        xhr.send(`product_name=${productName}&category=${category}&price=${price}&quantity=${quantity}&total_price=${totalPrice}`);
    });
});
s