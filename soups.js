document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach((button) => {
    let count = 0;

    button.addEventListener("click", function (event) {
      const target = event.target;
      const itemName = this.getAttribute("data-item");
      const category = this.getAttribute("data-category");
      const price = parseFloat(this.getAttribute("data-price"));

      if (count === 0) {
        count++;
        this.innerHTML = `<div>-</div><span>${count}</span><div>+</div>`;
      } else {
        if (target.textContent === "+") {
          count++;
        } else if (target.textContent === "-" && count > 0) {
          count--;
        }

        if (count === 0) {
          this.innerHTML = `<div>Add To Cart</div>`;
        } else {
          this.innerHTML = `<div>-</div><span>${count}</span><div>+</div>`;
        }

        if (count > 9) {
          alert("Maximum limit reached!");
          count = 9;
          this.innerHTML = `<div>-</div><span>${count}</span><div>+</div>`;
        }
      }

      // Send order to the server via AJAX
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "save_order.php", true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onload = function () {
        if (xhr.status === 200) {
          console.log("Order saved! Redirecting...");
          window.location.href = "order.html";  // Redirect to order page
        }
      };

      const total = price * count;
      xhr.send(`item_name=${itemName}&category=${category}&price=${price}&quantity=${count}&total_price=${total}`);
    });
  });
});
