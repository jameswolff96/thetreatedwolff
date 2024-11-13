// Get modal elements
const modal = document.getElementById('orderModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const totalAmount = document.getElementById('totalAmount');

// Open modal when button is clicked
openModalBtn.onclick = () => {
  calculateTotal();
  const date = new Date(Date.now() + 12096e5).toISOString().split('T')[0]
  const date_needed = document.getElementById('date_needed');
  date_needed.placeholder = date;
  date_needed.min = date;
  modal.style.display = 'block';
};

// Close modal when 'x' is clicked
closeModalBtn.onclick = () => {
  modal.style.display = 'none';
};

// Close modal if user clicks outside of modal content
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

function calculateTotal() {
  let total = 0;
  const quantityInputs = document.querySelectorAll('input[type="number"][data-price]');

  quantityInputs.forEach(function(input) {
    const quantity = parseFloat(input.value) || 0;
    const price = parseFloat(input.getAttribute('data-price')) || 0;
    total += quantity * price;
  });

  // Update the total display, formatted to two decimal places
  totalAmount.textContent = total;
}

grecaptcha.ready(function() {
  grecaptcha
    .execute('6Lc9r30qAAAAAK73r7eB_3vygpnHCX-2d9n0oHNM', {action: 'homepage'})
    .then(function(token) {
      document.getElementById('captchaResponse').value = token;
    });
});
