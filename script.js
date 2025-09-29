document.addEventListener('DOMContentLoaded', () => {
  const cartButtons = document.querySelectorAll('.product-card button');
  if (cartButtons.length === 0) {
    console.warn('No "Add to Cart" buttons found.');
  }

  cartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productCard = button.closest('.product-card');
      if (!productCard) {
        console.error('Button is not inside a product card.');
        return;
      }
      const productNameElem = productCard.querySelector('h4');
      if (!productNameElem) {
        console.error('Product name element not found.');
        return;
      }
      const productName = productNameElem.textContent.trim();
      alert("${productName}" has been added to your cart.);
    });
  });

  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();

      const name = contactForm.querySelector('#name').value.trim();
      const title = contactForm.querySelector('#title').value.trim();
      const message = contactForm.querySelector('#message').value.trim();

      if (!name || !title || !message) {
        alert('Please fill in all fields before submitting.');
        return;
      }

      alert(Thank you, ${name}! Your message has been received.);
      contactForm.reset();
    });
  }
});