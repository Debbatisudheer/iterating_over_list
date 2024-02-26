// Initialize an empty array to store contacts
let contacts = [];

// Function to add a new contact
function addContact() {
    const nameInput = document.getElementById('contactName');
    const numberInput = document.getElementById('contactNumber');

    const name = nameInput.value.trim();
    const number = numberInput.value.trim();

    if (name !== '' && number !== '') {
        contacts.push({ name, number });
        displayContacts();
        nameInput.value = '';
        numberInput.value = '';
    } else {
        alert('Please enter both name and phone number.');
    }
}

// Function to remove a contact
function removeContact(index) {
    contacts.splice(index, 1);
    displayContacts();
}

// Function to search for contacts
function searchContacts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    const filteredContacts = contacts.filter(contact => {
        const contactName = contact.name.toLowerCase();
        const contactNumber = contact.number.toLowerCase();
        return contactName.includes(searchInput) || contactNumber.includes(searchInput);
    });

    displayContacts(filteredContacts);
}

// Function to display contacts
function displayContacts(filteredContacts = contacts) {
    const contactsList = document.getElementById('contactsList');
    contactsList.innerHTML = '';

    filteredContacts.forEach((contact, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${contact.name}: ${contact.number}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeContact(index);

        listItem.appendChild(removeButton);
        contactsList.appendChild(listItem);
    });
}