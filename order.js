// Get modal elements
const modal = document.getElementById('orderModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

// Open modal when button is clicked
openModalBtn.onclick = () => {
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

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Select all quantity inputs with data-price attribute
  const quantityInputs = document.querySelectorAll('.order-items input[type="number"][data-price]');

  // Select the total amount span
  const totalAmount = document.getElementById('totalAmount');

  // Function to calculate the total
  function calculateTotal() {
    let total = 0;

    quantityInputs.forEach(function(input) {
      const quantity = parseFloat(input.value) || 0;
      const price = parseFloat(input.getAttribute('data-price')) || 0;
      total += quantity * price;
    });

    // Update the total display, formatted to two decimal places
    totalAmount.textContent = total.toFixed(2);
  }

  // Add event listeners to each quantity input
  quantityInputs.forEach(function(input) {
    input.addEventListener('input', calculateTotal);
  });

  // Initial calculation in case there are pre-filled values
  calculateTotal();
});
