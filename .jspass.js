const readline = require("readline");

function generatePassword() {
    // Create an interface for reading user input from the command line
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    // Prompt the user to enter the desired length of the password
    rl.question("Enter the desired length of the password: ", (length) => {
        // Define the possible characters that can be used in the password
        const characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:",.<>/?';
        let password = "";

        // Generate a random character from the possible characters for the specified length of the password
        for (let i = 0; i < length; i++) {
            password += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );
        }

        console.log(password);

        // Close the interface
        rl.close();
    });
}

// Example usage: generate a password based on user input
generatePassword();
