//Map - take in an array och applies a callback in every element. 
//Return a array that is the same size as the initial array

// const persons = [
//     {surname: 'John', lastname: 'Doe'},
//     {surname: 'Jane', lastname: 'Done'},
//     {surname: 'Lars', lastname: 'Svensson'},

// ]
// const fullnames = persons.map(person => `${person.surname} ${person.lastname}`);
// // console.log(fullnames);

// const html = fullnames
// .map(item => `<li>${item}</li>`)
// .join("");

// //console.log(html); //[ '<li>John Doe</li>', '<li>Jane Done</li>', '<li>Lars Svensson</li>' ]
// //const htmlString = html.join("");

// const ul = document.querySelector('.persons')
// ul.innerHTML = html;


//Filter - Itererar över en array och returnerar de element som uppfyller villkoret

const persons = [
    {id: 123, surname: 'Zenaide', lastname: 'Doe', age: 30},
    {id: 2345, surname: 'Jane', lastname: 'Done', age: 25},
    {id: 1272, surname: 'Amaral', lastname: 'Svensson', age: 40},

]


//Find by Id
const foundPersonById = persons.filter(person => person.id === 2345)
console.log(foundPersonById);


// Remove by Id
const filteredPersons = persons.filter(person => person.id !== 2345)
console.log(filteredPersons);

// over age 30
const over30 = persons.filter(person => person.age >= 30);
console.log(over30);

//Reduce - ackumulerar och returnerar ett nytt värde för varje iteration
// och slutligen returnerar reduce ett värde

const totalYears = persons.reduce((acc, person)=> acc + person.age, 0);
console.log(totalYears);


const sortByAge = persons.sort((a, b)=> b.age - a.age);
console.log(sortByAge);

const sortPersonBySurname = persons.sort((a,b) => a.surname > b.surname  ? 1 : -1 )
console.log(sortPersonBySurname);