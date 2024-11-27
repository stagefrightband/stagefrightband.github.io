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
