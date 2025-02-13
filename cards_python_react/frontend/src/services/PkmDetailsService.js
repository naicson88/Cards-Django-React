import axios from "axios";
import { API_DJANGO } from './../constants'


const pokemonByIdUrl = API_DJANGO+"/pokemon/"
const pokemonAttacksUrl = API_DJANGO+"card/pokemon-attacks/"
const pokemonEvolutionsUrl = API_DJANGO+"pokemon/evolutions/"
const pokemonCardsUrl = API_DJANGO+"card/pokemon-cards/"


export const getPokemonById =  async (setPokemon, setPokemonType, id)  => {
    axios.get(pokemonByIdUrl+id+'/')
    .then( (response) => {
        console.log("#getPokemonById")
        const data = response.data  
        console.log(data)
        setPokemonType(data.type)
        setPokemon(data)
    })
    .catch( (error) => {
        console.log(error)
        alert("Item NÃO enviado!")
    })
}

export const getPokemonAttacks = async (setPokemonAttacks, pokemonId) => {
    axios.get(pokemonAttacksUrl+pokemonId)
    .then( (response) => {
        console.log("#getPokemonAttacks")
        const data = response.data  
        console.log(data)
        setPokemonAttacks(data)
    })
    .catch( (error) => {
        console.log(error)
        alert("Item NÃO enviado!")
    })

}

export const getPokemonEvolutions = async (setPokemonEvolution, pokemonId) => {
    axios.get(pokemonEvolutionsUrl+pokemonId)
    .then( (response) => {
        console.log("#getPokemonEvolutions")
        const data = response.data  
        console.log(data)
        setPokemonEvolution(data)
    })
    .catch( (error) => {
        console.log(error)
        alert("Item NÃO enviado!")
    })
}

export const getPokemonCards = async (setPokemonCards, pokemonId) => {
    axios.get(pokemonCardsUrl+pokemonId)
    .then( (response) => {
        console.log("#getPokemonCards")
        const data = response.data  
        console.log(data)
        setPokemonCards(data)
    })
    .catch( (error) => {
        console.log(error)
        alert("Item NÃO enviado!")
    })
}