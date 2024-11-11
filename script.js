document.getElementById('generate').addEventListener('click', function() {
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    // Ensure the length is at least 8 to accommodate the fixed positions
    const totalLength = Math.max(length, 8);

    // Prompt the user for 4 letters
    let userInput = prompt("Enter 4 distinct letters (e.g., abcd):");
    while (!/^[a-zA-Z]{4}$/.test(userInput) || new Set(userInput).size !== 4) {
        userInput = prompt("Please enter exactly 4 distinct letters (a-z or A-Z):");
    }

    // Create a password array
    let passwordArray = Array(totalLength).fill(''); // Initialize an array with empty strings

    // Place user letters in specified positions
    passwordArray[0] = userInput[0]; // 1st position
    passwordArray[2] = userInput[1]; // 3rd position
    passwordArray[4] = userInput[2]; // 5th position
    passwordArray[6] = userInput[3]; // 7th position

    // Characters for random filling
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperChars = includeUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
    const numberChars = includeNumbers ? '0123456789' : '';
    const symbolChars = includeSymbols ? '!@#$%^&*()_+[]{}|;:,.<>?' : '';

    // Combine all selected characters
    let allChars = lowerChars + upperChars + numberChars + symbolChars;

    // Fill remaining positions with random characters
    for (let i = 0; i < totalLength; i++) {
        if (passwordArray[i] === '') { // Only fill empty positions
            const randomIndex = Math.floor(Math.random() * allChars.length);
            passwordArray[i] = allChars[randomIndex];
        }
    }

    // Shuffle the password array to enhance randomness
    const shuffledPassword = passwordArray.sort(() => Math.random() - 0.5).join('');
    document.getElementById('password').textContent = shuffledPassword;
});
