// Function to get a cookie by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`); 
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

// Function to apply or remove a class based on cookie value
function toggleClassBasedOnCookie(cookieName, className) {
  const cookieValue = getCookie(cookieName) === "true";
  if (cookieValue) {
    document.documentElement.classList.add(className);
  } else {
    document.documentElement.classList.remove(className);
  }
}

// Function to display cart items
function displayCartItems() {
  const cartContent = document.getElementById("cart-content");
  const cartItems = getCookie("cartitems");

  if (!cartItems || cartItems === "null") {
    cartContent.innerText = "You have no items in your cart.";
  } else {
    const items = cartItems.split(",");
    const list = document.createElement("ul");
    items.forEach(item => {
      const listItem = document.createElement("li");
      listItem.innerText = item.trim();
      list.appendChild(listItem);
    });
    cartContent.innerHTML = "";
    cartContent.appendChild(list);
  }
}

// Call displayCartItems on page load
document.addEventListener("DOMContentLoaded", displayCartItems);

// Check and apply the classes based on the cookies
toggleClassBasedOnCookie("highcontrast", "high-contrast");
toggleClassBasedOnCookie("opendyslexic", "open-dyslexic");

// Optional: If you want to monitor changes in the cookies dynamically
setInterval(() => {
  toggleClassBasedOnCookie("highcontrast", "high-contrast");
  toggleClassBasedOnCookie("opendyslexic", "open-dyslexic");
}, 1000);
