let pokemonList = [];

let pokemon = "";

pokemonList = [
  {
    name: "Charmander",
    height: 0.6,
    type: ["Fire"]
  },
  {
    name: "Machamp",
    height: 1.6,
    type: ["Fighting"]
  },
  {
    name: "Lugia",
    height: 5.2,
    type: ["Psychic","Flying"]
  }ke
];

pokemonList.forEach(function(pokemon) {
   console.log(pokemon.name + " " +pokemon.height + " " + pokemon.type);
 });
