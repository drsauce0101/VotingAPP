// Creating the const to get the API url e the options on the container

const API_URL = 'http://127.0.0.1:5000';
const optionsContainer = document.getElementById('voting-options-container');

/* @param {object} items */

async function voteForItem(itemId) {
    console.log(`Enviando voto para o item ${itemId}...`);
    try {
        // Fetch with POST
        const response = await fetch(`${API_URL}/vote/${itemId}`, {
            method: 'POST'
        });

        if (!response.ok) {
            // If the answer is not positive then error 500
            throw new Error('Not ok');
        }

        const result = await response.json();
        console.log('API Answer:', result.message);

        // DEPOIS de votar com sucesso, buscamos os itens novamente para atualizar a tela
        fetchVotingItems();

    } catch (error) {
        console.error(`Error voting on the specific item ${itemId}:`, error);
    }
}

function renderItems(items) {
    // The code empty the containers
    optionsContainer.innerHTML = '';

    // 'Object.keys(items)' get all the keys from the object (1, 2, 3) e give us an equivalent array ['1', '2', '3']
    // The the code run through the array with forEach
    Object.keys(items).forEach(itemId => {
        const item = items[itemId]; // getting the current object

        // Creating the HTML elements to manage
        const itemDiv = document.createElement('div');
        itemDiv.className = 'voting-item'; // CSS class

        const itemName = document.createElement('span');
        itemName.className = 'item-name';
        itemName.textContent = item.name;

        const itemVotes = document.createElement('span');
        itemVotes.className = 'item-votes';
        itemVotes.textContent = `${item.votes} votes`;

        const voteButton = document.createElement('button');
        voteButton.textContent = 'Vote!'

        // Storing the ID
        voteButton.dataset.id = itemId;

        // Listen to the click event
        voteButton.addEventListener('click', () => {
            voteForItem(itemId);
        });

        // Attaching the elements
        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemVotes);
        itemDiv.appendChild(voteButton);

        // Now putting the attached elements in the main page
        optionsContainer.appendChild(itemDiv);
    });
}

// Function bellow search for the elements in the API

async function fetchVotingItems() {
    console.log("Searching in the API...");
    try {
        const response = await fetch(`${API_URL}/items`);
        const data = await response.json();

        console.log("Data received:", data);
        
        // Showing on the screen
        renderItems(data);

    } catch (error) {
        console.error("Error searching for data:", error);
        optionsContainer.innerHTML = "Error loading the options. Is the Python server running?";
    }
}

fetchVotingItems();