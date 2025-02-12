document.addEventListener("DOMContentLoaded", () => {

  const BASE_URL = "http://localhost:3000"
  const TRAINERS_URL = `${BASE_URL}/trainers`
  const POKEMONS_URL = `${BASE_URL}/pokemons`

  const mainTag = document.querySelector("main")
  fetch(TRAINERS_URL)
  .then(resp => resp.json())
  .then(trainers => {
    trainers.forEach(trainer => {
      mainTag.innerHTML += `
        <div class="card" data-id="${trainer.id}">
          <p>${trainer.name}</p>
          <button data-trainer-id="${trainer.id}">Add Pokemon</button>
          <ul>
          </ul>
        </div>
      `
  })
})

  const pokemonLi = `
    <li>
      ${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button>
    </li>
  `


})
