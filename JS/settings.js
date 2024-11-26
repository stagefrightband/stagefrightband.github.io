document.addEventListener('DOMContentLoaded', function() {
  const highContrastToggle = document.getElementById('highcontrast-toggle');

  // Check if 'highcontrast' cookie is set to 'true'
  if (document.cookie.split(';').some((item) => item.trim() === 'highcontrast=true')) {
    highContrastToggle.checked = true;
    document.body.classList.add('high-contrast');
  }

  highContrastToggle.addEventListener('change', function() {
    const value = highContrastToggle.checked ? 'true' : 'false';
    document.cookie = 'highcontrast=' + value + '; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';

    // Add or remove 'high-contrast' class on body
    if (highContrastToggle.checked) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  });
});
