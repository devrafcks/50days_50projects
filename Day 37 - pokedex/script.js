const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5'
}
const main_types = Object.keys(colors)

async function fetchPokemons() {
  for (let i = 1; i <= pokemon_count; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    const data = await res.json()
    createPokemonCard(data)
  }
}

function createPokemonCard(pokemon) {
  const pokeEl = document.createElement('div')
  pokeEl.classList.add('pokemon')

  const name = capitalize(pokemon.name)
  const id = String(pokemon.id).padStart(3, '0')

  const type = pokemon.types
    .map(t => t.type.name)
    .find(t => main_types.includes(t))

  pokeEl.style.backgroundColor = colors[type] || '#eee'

  pokeEl.innerHTML = `
    <div class="img-container">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}">
    </div>
    <div class="info">
      <span class="number">#${id}</span>
      <h3 class="name">${name}</h3>
      <small class="type">Type: <span>${type}</span></small>
    </div>
  `

  poke_container.appendChild(pokeEl)
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

fetchPokemons()
