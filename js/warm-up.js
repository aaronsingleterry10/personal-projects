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
                        let image = data.sprites.front_default;
                        let name = data.name;
                        let capName = name.charAt(0).toUpperCase() + name.slice(1);
                        // console.log(data.sprites.front_default)
                        let lastItemInArray = data.types[data.types.length - 1];
                        let types = "";
                        for (let i in data.types) {
                            if (data.types.length > 0) {
                                if (data.types.indexOf(data.types[i]) === data.types.indexOf(lastItemInArray)) {
                                    types += data.types[i].type.name;
                                } else {
                                    types += data.types[i].type.name + ", ";
                                }
                            }
                        }
                        console.log(data.types.length)
                        document.getElementById("pokemon").innerHTML +=
                            `
                                <div class="col">
                                    <div class="card">
                                        <div class="c-card"><img src="${image}" class="card-img-top" alt="..."></div>
                                        <div class="card-body">
                                            <h5 class="card-title">${capName}</h5>
                                            <p class="card-text">
                                                Types: ${types}
                                            </p>
                                        </div>
                                    </div>
                                </div> 
                            `
                        // `<div> ${data.name} </div>`
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