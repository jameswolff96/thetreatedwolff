// Get modal elements
const modal = document.getElementById('orderModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const totalAmount = document.getElementById('totalAmount');

// Open modal when button is clicked
openModalBtn.onclick = () => {
  calculateTotal();
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
