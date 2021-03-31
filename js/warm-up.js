(function () {

    // fetch("https://pokeapi.co/api/v2/pokemon/").then(response => console.log(response.json()))
    let singlePokemon = [];
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=30")
        .then(response => response.json())
        .then(pokemon => {
            // console.log(pokemon.results[3].name)
            for (let x in pokemon.results) {
                // console.log(pokemon.results[x].url)
                let result = pokemon.results[x].url
                fetch(result)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data.name)
                        // for (let i in data) {
                        //     console.log(data[i])
                        // }
                    })
            }
            // for (let x = 0; x < pokemon.results.length; x++) {
            //     console.log(p)
            // }
        })

})();