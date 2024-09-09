// app.js

// Select the button and data container elements
const fetchDataBtn = document.getElementById('fetchDataBtn');
const dataContainer = document.getElementById('dataContainer');

// Notion API details
const notionAPIKey = 'Bearer secret_p1lgOW4I19gDNJWYnWs0jtHR2grKLfVDCTWtH49bt2W';
const databaseId = '871802c3c1bf43aab97795626d4dbd87';

// Event listener for the button
fetchDataBtn.addEventListener('click', fetchNotionData);

// Function to fetch data from Notion API
async function fetchNotionData() {
    try {
        // Fetch data from the Notion API using a POST request
        const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
            method: 'POST',
            headers: {
                'Authorization': notionAPIKey,
                'Notion-Version': '2022-06-28',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({}) // Empty body for querying all entries
        });

        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        // Parse the JSON data
        const data = await response.json();
        console.log(data); // Check the console for data structure
        
        // Clear previous data
        dataContainer.innerHTML = '';

        // Display the data on the page
        displayData(data.results);
    } catch (error) {
        console.error('Error:', error);
        dataContainer.textContent = 'Error fetching data from Notion API.';
    }
}

// Function to display data in the HTML
function displayData(data) {
    data.forEach(item => {
        const title = item.properties.Name.title[0].text.content; // Adjust based on your database structure
        const entryElement = document.createElement('div');
        entryElement.textContent = title;
        dataContainer.appendChild(entryElement);
    });
}
