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

let sizeThreshold = 5.2;

for (let i = 0; i < pokemonList.length; i++){
  if (pokemonList[i].height >= sizeThreshold){
    document.write(`${pokemonList[i].name}  (Height: ${pokemonList[i].height}) - Wow!! This is huge! <br>`)
  } else { document.write(`${pokemonList[i].name}  (Height: ${pokemonList[i].height}) <br>`)}

}
