let pokemonRepository = (function() {

let pokemonList = [];

let pokemon = "";

let repository = [
  {
    name: "Charmander",
    height: 0.6,
    type: ["fire"]
  },
  {
    name: "Machamp",
    height: 1.6,
    type: ["fighting"]
  },
  {
    name: "Lugia",
    height: 5.2,
    type: ["psychic","flying"]
  }
];

function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return repository;
  }
  // details of pokemon in console
  function showDetails(pokemon) {
    console.log(pokemon);
  }
  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    // event listener for button
    button.addEventListener('click', function(){
      showDetails(pokemon.name);
  });
}
// function outside of IIFE
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();
// added pokemon to list
pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
