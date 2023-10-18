
// Define the person object
const person = {
    // Internal properties
    _name: 'John Doe',
    _age: undefined,
    _email: 'johndoe@example.com',

    // Getter for the name property
    get name() {
        return this._name;
    },

    // Getter for the email property
    get email() {
        return this._email;
    },

    // Setter for the age property
    set age(value) {
        this._age = value;
    },

    // Method to get the age property value
    getAge() {
        return this._age;
    },

    // Method to set the age property value
    setAge(age) {
        this._age = age;
    }
};

// Make the name property read-only
Object.defineProperty(person, 'name', {
    writable: false
});

// Make the email property read-only
Object.defineProperty(person, 'email', {
    writable: false
});

// Make the age property write-only
Object.defineProperty(person, 'age', {
    set(value) {
        this._age = value;
    }
});
console.log(person.name);    // Output: John Doe
console.log(person.email);   // Output: johndoe@example.com

person.name = 'Jane Smith';  // Error: Cannot assign to read only property 'name'
person.email = 'janesmith@example.com'; // Error: Cannot assign to read only property 'email'

person.age = 25;   // Set the age using the setter
console.log(person.getAge());   // Output: 25

person.setAge(30);   // Update the age using the setAge() method
console.log(person.getAge());   // Output: 30