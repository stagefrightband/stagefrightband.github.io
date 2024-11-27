document.addEventListener("DOMContentLoaded", function () {
  const highContrastToggle = document.getElementById("highcontrast-toggle");
  const opendyslexicToggle = document.getElementById("opendyslexic-toggle");

  // Function to get cookie value by name
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  const isOpendyslexic = getCookie("opendyslexic") === "true";
  const isHighContrast = getCookie("highcontrast") === "true";

  if (isOpendyslexic) {
    opendyslexicToggle.checked = true;
    document.body.classList.add("open-dyslexic");
  }

  if (isHighContrast) {
    highContrastToggle.checked = true;
    document.body.classList.add("high-contrast");
  }

  function handleToggle(toggle, className, cookieName) {
    toggle.addEventListener("change", function () {
      const value = toggle.checked ? "true" : "false";
      document.cookie =
        cookieName + "=" + value + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

      if (toggle.checked) {
        document.body.classList.add(className);
      } else {
        document.body.classList.remove(className);
      }
    });
  }

  handleToggle(opendyslexicToggle, "open-dyslexic", "opendyslexic");
  handleToggle(highContrastToggle, "high-contrast", "highcontrast");
});
