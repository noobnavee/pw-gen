document.getElementById('passwordForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the user input
    const letters = document.getElementById('letters').value;

    // Check if the input is exactly 4 letters
    if (letters.length !== 4) {
        document.getElementById('result').textContent = 'Please enter exactly 4 letters.';
        return; // Exit the function if the input is not valid
    }

    // Extract individual letters
    const letter1 = letters.charAt(0);
    const letter2 = letters.charAt(1);
    const letter3 = letters.charAt(2);
    const letter4 = letters.charAt(3);

    // Generate the password
    const password = generatePassword(letter1, letter2, letter3, letter4);
    
    // Display the result
    document.getElementById('result').textContent = `Generated Password: ${password}`;
});

// Clear button functionality
document.getElementById('clearButton').addEventListener('click', function() {
    // Clear input fields
    document.getElementById('letters').value = '';
    document.getElementById('result').textContent = ''; // Clear the result
});

// Function to generate a random strong password
function generatePassword(letter1, letter2, letter3, letter4) {
    // Initialize the password array with user letters at specified positions
    const passwordArray = [letter1, '', letter2, '', letter3, '', letter4, '', '', ''];

    // Define the characters to be used for generating random characters
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    
    // Fill the empty positions with random characters
    for (let i = 0; i < passwordArray.length; i++) {
        if (passwordArray[i] === '') {
            passwordArray[i] = characters.charAt(Math.floor(Math.random() * characters.length));
        }
    }

    // Join the array to create the final password
    return passwordArray.join('');
}
