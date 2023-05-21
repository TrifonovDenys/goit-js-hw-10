import './css/styles.css';
import Notiflix from 'notiflix';
var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
import pokemonCardTpl from '../src/templ/pokemon-card.hbs'
const a = document.querySelector('.js-card')
const serchInput = document.querySelector('#search-box')


function fetchPokemon(pokemonId) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(response => {
    return response.json()
  })
}

function renderPokemon(pokemon) {
  const markup = pokemonCardTpl(pokemon) 
  a.innerHTML = markup
}

serchInput.addEventListener('input', debounce(inSerch, 0))
