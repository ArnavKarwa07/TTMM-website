document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach((button) => {
    let count = 0;

    button.addEventListener("click", function (event) {
      const target = event.target;

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
    });
  });
});
