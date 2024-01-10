
// Fetch returnerar ett promise
const url = 'https://jsonplaceholder.typicode.com/users'
fetch(url)
.then(response => response.json())
// .then(function(response) {
//     return response.json()
// })
.then(data => console.log(data))
// .then(function(data) {
//     console.log(data)
// })

.catch(error => console.log(error));
// .catch(function(error){
//     console.log(error);
// })
// console.log(result);