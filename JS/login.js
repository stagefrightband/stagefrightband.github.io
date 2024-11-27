document.addEventListener("DOMContentLoaded", function () {
  const highContrastToggle = document.getElementById("highcontrast-toggle");
  const opendyslexicToggle = document.getElementById("opendyslexic-toggle");

  // Check if 'highcontrast' cookie is set to 'true'
  if (
    document.cookie
      .split(";")
      .some((item) => item.trim() === "highcontrast=true")
  ) {
    highContrastToggle.checked = true;
    document.body.classList.add("high-contrast");
  }

  // Check if 'opendyslexic' cookie is set to 'true'
  if (
    document.cookie.split(";").some((item) => item.trim() === "opendyslexic=true")
  ) {
    opendyslexicToggle.checked = true;
    document.body.classList.add("open-dyslexic");
  }

  function handleToggle(toggle, className, cookieName) {
    toggle.addEventListener("change", function () {
      const value = toggle.checked ? "true" : "false";
      document.cookie = cookieName + "=" + value + "; max-age=31536000; path=/";

      // Add or remove class on body
      if (toggle.checked) {
        document.body.classList.add(className);
      } else {
        document.body.classList.remove(className);
      }
    });
  }

  handleToggle(highContrastToggle, "high-contrast", "highcontrast");
  handleToggle(opendyslexicToggle, "open-dyslexic", "opendyslexic");
});

function showPassword() {
  var x = document.getElementById("passwordField");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}