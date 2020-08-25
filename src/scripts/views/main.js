import "../component/search.js";
import "../component/poke-list.js";

function main() {
    const URL = "https://pokeapi.co/api/v2/pokemon";
    const getPokemon = keyword => {
        fetch(`${URL}/${keyword}`)
            .then(response => response.json())
            .then(pokemon => {
                if (pokemon) {
                    // Dapat json kah ?
                    Promise.resolve(render(pokemon))
                    Promise.resolve(pokemon)
                } else {
                    Promise.reject(`hmm still errror broh !`);
                }
            });
    };

    // cek isi json
    const render = keyword => {
        console.log(keyword);
        console.log(keyword.id);
        console.log(keyword.name);
        console.log(keyword.abilities[0].ability.name);
        console.log(keyword.abilities[1].ability.name);
    };

    document.addEventListener("DOMContentLoaded", () => {
        const searchItem = document.querySelector("search-widget");
        const itemList = document.querySelector("poke-list");
        // getPokemon('bulbasaur');
        const onButtonSearchClicked = async () => {
            try {
                const result = await getPokemon(searchItem.value);
                console.log(result);
                render(result);
            } catch (e) {
                fallbackResult(e);
            }
        };
        const render = keyword => itemList.poke = keyword;
        const fallbackResult = message => itemList.renderError(message);
        searchItem.clickEvent = onButtonSearchClicked;
    });

    // fetch generic name and url
    // function fetchKantoPokemon() {
    //     fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    //         .then(response => response.json())
    //         .then(function (allpokemon) {
    //             allpokemon.results.forEach(function (pokemon) {
    //                 fetchPokemonData(pokemon);
    //             })
    //         })
    // }

    // pass the result and fetch the url
    // function fetchPokemonData(pokemon) {
    //     let url = pokemon.url // <--- this is saving the pokemon url to a variable to us in a fetch.(Ex: https://pokeapi.co/api/v2/pokemon/1/)
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(function (pokeData) {
    //             console.log(pokeData)
    //         })
    // }

    // render the result
    // function renderPokemon(pokeData) {
    //     let allPokemonContainer = document.getElementById('poke-container');
    //     let pokeContainer = document.createElement("div") //div will be used to hold the data/details for indiviual pokemon.{}
    //     let pokeName = document.createElement('h4')
    //     pokeName.innerText = pokeData.name
    //     let pokeNumber = document.createElement('p')
    //     pokeNumber.innerText = `#${pokeData.id}`
    //     let pokeTypes = document.createElement('ul')
    //     //ul list will hold the pokemon types
    //     createTypes(pokeData.types, pokeTypes)
    //     // helper function to go through the types array and create li tags for each one
    //     pokeContainer.append(pokeName, pokeNumber, pokeTypes);
    //     //appending all details to the pokeContainer div
    //     allPokemonContainer.appendChild(pokeContainer);
    //     //appending that pokeContainer div to the main div which will                                                             hold all the pokemon cards
    // }

    // mapping the render result
    // function createTypes(types, ul) {
    //     types.forEach(function (type) {
    //         let typeLi = document.createElement('li');
    //         typeLi.innerText = type['type']['name'];
    //         ul.append(typeLi)
    //     })
    // }

    // function createPokeImage(pokeID, containerDiv) {
    //     let pokeImage = document.createElement('img')
    //     pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`
    //     containerDiv.append(pokeImage);
    // }
};

export default main;