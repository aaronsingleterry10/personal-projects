(function () {

    // fetch("https://pokeapi.co/api/v2/pokemon/").then(response => console.log(response.json()))

    fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(response => response.json())
        .then(pokemon => {
            // console.log(pokemon.results[3])
            for (let x in pokemon) {

            }
        })

})();