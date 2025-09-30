document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateButton');
    const bucketNumberDisplay = document.getElementById('bucketNumber');

    generateButton.addEventListener('click', generateBucketNumber);

    function generateBucketNumber() {
        // Generate a random number between 1 and 8 (inclusive)
        const randomNumber = Math.floor(Math.random() * 8) + 1;
        
        // Format the number to always have two digits (e.g., 1 -> 01, 8 -> 08)
        const formattedNumber = String(randomNumber).padStart(2, '0');
        
        // Update the display with a slight delay for visual effect
        bucketNumberDisplay.textContent = '--'; // Show "thinking" state
        setTimeout(() => {
            bucketNumberDisplay.textContent = formattedNumber;
        }, 300); // 300ms delay
    }
});
