document.addEventListener("DOMContentLoaded", function () {
  const highContrastToggle = document.getElementById("highcontrast-toggle");
  const opendyslexicToggle = document.getElementById("opendyslexic-toggle");

  // Function to get cookie value by name
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  // Initialize High Contrast
  if (
    document.cookie
      .split(";")
      .some((item) => item.trim() === "highcontrast=true")
  ) {
    highContrastToggle.checked = true;
    document.body.classList.add("high-contrast");
  }

  highContrastToggle.addEventListener("change", function () {
    const value = this.checked ? "true" : "false";
    document.cookie = "highcontrast=" + value + "; max-age=31536000; path=/";

    if (this.checked) {
      document.body.classList.add("high-contrast");
    } else {
      document.body.classList.remove("high-contrast");
    }
  });

  // Initialize OpenDyslexic
  if (
    document.cookie
      .split(";")
      .some((item) => item.trim() === "opendyslexic=true")
  ) {
    opendyslexicToggle.checked = true;
    document.body.classList.add("open-dyslexic");
  }

  opendyslexicToggle.addEventListener("change", function () {
    const value = this.checked ? "true" : "false";
    document.cookie =
      "opendyslexic=" + value + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

    if (this.checked) {
      document.body.classList.add("open-dyslexic");
    } else {
      document.body.classList.remove("open-dyslexic");
    }
  });
});

// Function to get a cookie by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

// Function to apply or remove a class based on cookie value
function toggleClassBasedOnCookie(cookieName, className) {
  const cookieValue = getCookie(cookieName) === 'true';
  if (cookieValue) {
      document.documentElement.classList.add(className);
  } else {
      document.documentElement.classList.remove(className);
  }
}

// Check and apply the classes based on the cookies
toggleClassBasedOnCookie('highcontrast', 'high-contrast');
toggleClassBasedOnCookie('opendyslexic', 'open-dyslexic');

// Optional: If you want to monitor changes in the cookies dynamically
setInterval(() => {
  toggleClassBasedOnCookie('highcontrast', 'high-contrast');
  toggleClassBasedOnCookie('opendyslexic', 'open-dyslexic');
}, 1000);

