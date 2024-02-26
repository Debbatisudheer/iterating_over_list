# Initialize an empty list to store contacts
contacts = []

# Function to add a new contact
def add_contact():
    name = input("Enter the name of the contact: ")
    number = input("Enter the phone number of the contact: ")
    contacts.append({'name': name, 'number': number})

# Function to remove a contact
def remove_contact(index):
    del contacts[index]

# Function to search for contacts
def search_contacts(search_input):
    search_input = search_input.lower()
    filtered_contacts = [contact for contact in contacts if
                         search_input in contact['name'].lower() or
                         search_input in contact['number'].lower()]
    return filtered_contacts

# Function to display contacts
def display_contacts(contact_list):
    for index, contact in enumerate(contact_list, start=1):
        print(f"{index}. {contact['name']}: {contact['number']}")

# Add some sample contacts
add_contact()
add_contact()
add_contact()

# Display all contacts
print("All Contacts:")
display_contacts(contacts)

# Search for contacts with 'John' in the name
search_results = search_contacts('John')
print("\nSearch Results:")
display_contacts(search_results)

# Remove the second contact
remove_contact(1)

# Display updated contacts
print("\nUpdated Contacts:")
display_contacts(contacts)

