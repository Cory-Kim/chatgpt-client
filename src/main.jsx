// main.jsx

// Import any necessary modules here

const rootElement = document.getElementById('root');

async function handleSubmit(event) {
    event.preventDefault();

    const userInput = document.getElementById('userInput').value;

    try {
        const response = await fetch('https://chatgpt-server-dv4rimw58-cory-kim.vercel.app/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: userInput }),
        });

        if (response.ok) {
            const data = await response.json();
            displayResponse(data.message); // Assuming displayResponse is a function that displays the response on the webpage
        } else {
            console.error('Request failed with status:', response.status);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Function to display the response on the webpage
function displayResponse(message) {
    const responseElement = document.createElement('p');
    responseElement.textContent = `Response: ${message}`;
    rootElement.appendChild(responseElement);
}

// Attach event listener to form submission
const form = document.getElementById('userForm');
form.addEventListener('submit', handleSubmit);

// Rest of the code...
