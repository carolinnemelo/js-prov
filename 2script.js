// Fetch from API
const ul = document.querySelector('.pokemons')

window.addEventListener("DOMContentLoaded", () => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(response => response.json())
        .then(data => displayPokemons(data.results))
        .catch(error => console.log(error))

})

function displayPokemons(pokemons) {
    const html = pokemons.map(pokemon => `<li>${pokemon.name}</li>`)
    .sort((a,b) => a > b ? 1 :-1)
    .filter(pokemon => pokemon.length > 8)
    ul.innerHTML = html
    .join("")
}


// non blockering single thread 
