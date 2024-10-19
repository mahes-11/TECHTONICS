signup.js
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const event = document.getElementById('event').value;
    const date = document.getElementById('date').value;
    const confirmationDiv = document.getElementById('confirmation');

    // Check if fields are filled
    if (!name || !email || !event || !date) {
        alert('Please fill all fields.');
        return false;
    }

    // Display confirmation message
    confirmationDiv.classList.remove('hidden');
    confirmationDiv.innerHTML = `<p>Thank you, ${name}! You have successfully registered for the ${event} on ${date}.</p>`;

    // Reset the form
    document.getElementById('eventSignup').reset();

    return false; // Prevent form submission
}


signup.js
function showGroup(groupId) {
    const groups = document.querySelectorAll('.group');
    groups.forEach(group => group.classList.add('hidden'));

    // Show the selected group
    document.getElementById(groupId).classList.remove('hidden');

    // Show confirmation alert
    alert(`You have selected the ${groupId.replace(/([A-Z])/g, ' $1').trim()} group.`);
}

// Highlight the current group and show it
function showGroup(groupId) {
    const groups = document.querySelectorAll('.group');
    groups.forEach(group => group.classList.add('hidden'));

    const selectedGroup = document.getElementById(groupId);
    selectedGroup.classList.remove('hidden');

    // Remove active class from all links
    const groupLinks = document.querySelectorAll('.group-list a');
    groupLinks.forEach(link => link.classList.remove('active'));

    // Add active class to the current group link
    const currentLink = document.getElementById(`${groupId}-link`);
    currentLink.classList.add('active');
}

// Set AI/ML as default group on page load
window.onload = function() {
    showGroup('aiml');
};
