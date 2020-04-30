//
// Object Destructuring
//

// const person = {
//     name: 'Idan',
//     age: 26,
//     location: {
//         city: 'Herzliya',
//         temp: 92
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}. `);

// const { city, temp: tempature } = person.location;
// if (city && tempature) {
//     console.log(`It's ${tempature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(`${publisherName}`);

//
// Array Destructuring
//

// const address = ['1299 S Juniper Street', 'Herzliya', 'Israel', '46423'];
// const [, city, state = 'New York' ] = address;
// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [ Coffee, , medium, ] = item;

console.log(`A medium ${Coffee} costs ${medium}`);