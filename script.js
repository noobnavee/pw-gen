document.getElementById('passwordForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the user input
    const letter1 = document.getElementById('letter1').value;
    const letter2 = document.getElementById('letter2').value;
    const letter3 = document.getElementById('letter3').value;
    const letter4 = document.getElementById('letter4').value;

    // Generate the password
    const password = generatePassword(letter1, letter2, letter3, letter4);
    
    // Display the result
    document.getElementById('result').textContent = `Generated Password: ${password}`;
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
