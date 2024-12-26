// payment.js

// Function to redirect to payment page
function redirectToPayment() {
    window.location.href = 'payment.html';
}

// Event listener for form submission (for demonstration purposes)
document.getElementById('payment-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Payment submitted successfully!');
});
