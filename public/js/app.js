// JavaScript functionality for the website

// Function to display current date and time
function displayDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'UTC' };
    const formattedDateTime = now.toLocaleString('en-GB', options);
    console.log(`Current Date and Time (UTC): ${formattedDateTime}`);
}

displayDateTime();