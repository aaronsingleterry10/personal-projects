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
                        let pokeId = data.id;
                        let lastItemInArray = data.types[data.types.length - 1];
                        let types = "";
                        for (let i in data.types) {
                            let move = data.types[i].type.name;
                            if (data.types.length > 0) {
                                if (data.types.indexOf(data.types[i]) === data.types.indexOf(lastItemInArray)) {
                                    types += (move.charAt(0).toUpperCase() + move.slice(1));
                                } else {
                                    types += move.charAt(0).toUpperCase() + move.slice(1) + ", ";
                                }
                            }
                        }
                        document.getElementById("pokemon").innerHTML +=
                            `
                                <div class="col" id="${pokeId}">
                                    <div class="card">
                                        <div class="c-card"><img src="${image}" class="card-img-top" alt="..."></div>
                                        <div class="card-body centered">
                                            <h5 class="card-title">${capName}</h5>
                                           <!-- <p class="card-text">
                                                Types: ${types}
                                            </p> -->
                                        </div>
                                    </div>
                                </div>   
                            `
                        document.getElementById(`${pokeId}`).addEventListener("click", () => {
                            console.log(name, pokeId)
                            document.getElementById("pokeModal").innerHTML =
                                `
                                    <div class="modal-dialog modal-dialog-centered">
                                      ...
                                    </div>
                                `
                        });
                    }).then();
            }
        });

})();