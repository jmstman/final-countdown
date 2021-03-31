let pokemonRepository = (function() {

let pokemonList = [];

let pokemon = "";

pokemonList = [
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

function getAll() {
  return pokemonList;
}
function add(pokemon) {
  pokemonList.push(pokemon);
}
return {
  getAll: getAll,
  add:add
};
})();

let sizeThreshold = 5.2;

pokemonList.forEach(function(pokemon) {
   console.log(pokemon.name + " " +pokemon.height + " " + pokemon.type);
  if (pokemon.height >= sizeThreshold){
    document.write(`${pokemon.name}  (Height: ${pokemon.height}) - Wow!! This is huge! <br>`)
  } else { document.write(`${pokemon.name}  (Height: ${pokemon.height}) <br>`)}

  });
