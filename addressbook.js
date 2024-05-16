class PhoneBook {
    constructor() {
        this.contacts = {};
    }

    // Add a new contact
    addContact(name, phoneNumber, email) {
        if (this.contacts[name]) {
            console.log(`Contact with name ${name} already exists.`);
            return;
        }
        this.contacts[name] = { phoneNumber, email };
        console.log(`Contact added: ${name}`);
    }

    // Search contact
    searchContact(name) {
        if (this.contacts[name]) {
            const contact = this.contacts[name];
            console.log(`Found contact - Name: ${name}, Phone Number: ${contact.phoneNumber}, Email: ${contact.email}`);
        } else {
            console.log(`Contact with name ${name} does not exist.`);
        }
    }

    // Update contacts
    updateContact(name, phoneNumber, email) {
        if (this.contacts[name]) {
            this.contacts[name] = { phoneNumber, email };
            console.log(`Contact updated: ${name}`);
        } else {
            console.log(`Contact with name ${name} does not exist.`);
        }
    }

    // Delete  contact 
    deleteContact(name) {
        if (this.contacts[name]) {
            delete this.contacts[name];
            console.log(`Contact deleted: ${name}`);
        } else {
            console.log(`Contact with name ${name} does not exist.`);
        }
    }

    // Display all contacts
    displayContacts() {
        console.log("Phone Book Contacts:");
        for (const name in this.contacts) {
            const contact = this.contacts[name];
            console.log(`Name: ${name}, Phone Number: ${contact.phoneNumber}, Email: ${contact.email}`);
        }
    }
}

// Example usage:
const myPhoneBook = new PhoneBook();
myPhoneBook.addContact("Prayusha Nimje", "97763846232", "prayu@gmail.com");
myPhoneBook.addContact("Pari sharma", "9876543210", "pari@gmail.com");
myPhoneBook.searchContact("Prayusha Nimje");
myPhoneBook.updateContact("Prayusha Nimje", "97763846232", "prayu@gmail.com");
myPhoneBook.searchContact("Prayusha Nimje");
myPhoneBook.deleteContact("Pari Sharma");
myPhoneBook.displayContacts();
