let balance = 0;

// Function to update the balance display
function updateBalance() {
    document.getElementById('balance').innerText = `$${balance.toFixed(2)}`;
}

// Function to deposit money
function deposit() {
    const amount = parseFloat(document.getElementById('deposit').value);
    // Check if amount is valid
    if (amount > 0) {
        // Add amount to balance
        balance += amount;
        console.log(`Successfully deposited $${amount}`);
        updateBalance(); // Update the displayed balance
    } else {
        console.log('Invalid amount');
    }
    document.getElementById('deposit').value = ''; // Clear input field after operation
}

// Function to withdraw money
function withdraw() {
    const amount = parseFloat(document.getElementById('withdraw').value);
    // Check if amount is valid
    if (amount > 0) {
        // Check if balance is sufficient
        if (amount <= balance) {
            // Subtract amount from balance
            balance -= amount;
            console.log(`Successfully withdrew $${amount}`);
            updateBalance(); // Update the displayed balance
        } else {
            console.log('Insufficient balance');
        }
    } else {
        console.log('Invalid amount');
    }
    document.getElementById('withdraw').value = ''; // Clear input field after operation
}

// Initialize balance display on page load
window.onload = function() {
    updateBalance();
}
