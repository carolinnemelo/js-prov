const url = 'https://jsonplaceholder.typicode.com/users'

//endast ett syntaktiskt saker över Promise chaining!
// Async / await ES8
// Error handling try / catch!


async function getData(params) {
   try { const response = await fetch(url) // quando essa tiver pronta vai ser armazenada em response

    // posso fazer outras coisas aqui dentro naquele esquema de um de cada ver (Synk code)
    console.log('test');
    const data = await response.json()

    console.log(data);
    return data;
    }
    catch(error) {
        console.log(error);
    }
}


getData()
    .then(data => console.log(data))