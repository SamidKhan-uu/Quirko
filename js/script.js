$(document).ready(function(){

    $("#signinBtn").click(function(){
        $("#signinModal").fadeIn();
    });

    $("#signinModal .close").click(function(){
        $("#signinModal").fadeOut();
    });

    $(window).click(function(event){
        if(event.target.id === "signinModal"){
            $("#signinModal").fadeOut();
        }
    });

    $("#signinForm").submit(function(e){
        e.preventDefault(); 
        let email = $("#email").val();
        let password = $("#password").val();
        alert("Email: " + email + "\nPassword: " + password);
        $("#signinModal").fadeOut();
        $(this)[0].reset();
    });

    function setCookie(name, value, days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        let expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(name) {
        let cname = name + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(cname) === 0) {
                return c.substring(cname.length, c.length);
            }
        }
        return "";
    }

    if (getCookie("cookiesAccepted") !== "yes") {
        $("#cookieConsent").fadeIn();
    }

    $("#acceptCookies").click(function(){
        setCookie("cookiesAccepted", "yes", 365);
        $("#cookieConsent").fadeOut();
    });

});

/*shahed js*/
document.addEventListener("DOMContentLoaded", () => {
  console.log("Electronics page loaded.");

  const buyPopup = document.getElementById("buyPopup");
  const closeBuyPopup = document.getElementById("closeBuyPopup");
  const popupProductName = document.getElementById("popupProductName");
  const popupProductPrice = document.getElementById("popupProductPrice");
  const popupProductImage = document.getElementById("popupProductImage");
  const quantityInput = document.getElementById("quantity");
  const addToCartBtn = document.getElementById("addToCartBtn");
  const cartPopup = document.getElementById("cartPopup");
  const closeCartBtn = document.getElementById("closeCartPopup");
  const cartItems = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");
  const navCart = document.getElementById("cartBtn");

  let currentProduct = {};
  let cart = [];

  document.querySelectorAll(".buy-btn").forEach(button => {
    button.addEventListener("click", (e) => {
      const product = e.target.closest(".product");
      const name = product.querySelector("h3").textContent;
      const price = product.querySelector("p").textContent;
      const img = product.querySelector("img").src;

      currentProduct = { name, price, img };

      popupProductName.textContent = name;
      popupProductPrice.textContent = price;
      popupProductImage.src = img;

      quantityInput.value = 1;
      buyPopup.style.display = "flex";
    });
  });

  closeBuyPopup.addEventListener("click", () => {
    buyPopup.style.display = "none";
  });

  addToCartBtn.addEventListener("click", () => {
    const qty = parseInt(quantityInput.value);
    if (qty > 0) {
      cart.push({ ...currentProduct, quantity: qty });
      updateCart();
      buyPopup.style.display = "none";
    }
  });

  navCart.addEventListener("click", () => {
    cartPopup.style.display = "flex";
  });

  closeCartBtn.addEventListener("click", () => {
    cartPopup.style.display = "none";
  });

  cartPopup.addEventListener("click", (e) => {
    if (e.target === cartPopup) {
      cartPopup.style.display = "none";
    }
  });

  function updateCart() {
    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
      const li = document.createElement("li");

      const img = document.createElement("img");
      img.src = item.img;

      const span = document.createElement("span");
      span.textContent = `${item.name} ${item.price} (x${item.quantity})`;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", () => {
        cart.splice(index, 1);
        updateCart();
      });

      li.appendChild(img);
      li.appendChild(span);
      li.appendChild(removeBtn);
      cartItems.appendChild(li);
    });
    cartCount.textContent = cart.length;
  }
});
