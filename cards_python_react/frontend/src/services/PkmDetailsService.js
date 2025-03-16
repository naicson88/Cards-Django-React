import axios from "axios";
import { API_DJANGO } from './../constants'


const pokemonByIdUrl = API_DJANGO+"/pokemon/"
const pokemonAttacksUrl = API_DJANGO+"card/pokemon-attacks/"
const pokemonEvolutionsUrl = API_DJANGO+"pokemon/evolutions/"
const pokemonCardsUrl = API_DJANGO+"card/pokemon-cards/"
const editOwnsCardUrl = API_DJANGO+"card/owns_card/"


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
        alert("Erro getPokemonById!")
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
        alert("Erro getPokemonAttacks!")
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
        alert("Erro getPokemonEvolutions!")
    })
}

export const getPokemonCards = async (setPokemonCards, pokemonId, setPages, page, size) => {
    axios.get(pokemonCardsUrl+pokemonId+`?page=${page}&size=${size}`)
    .then( (response) => {
        console.log("#getPokemonCards")
        const data = response.data  
        console.log(data)
        setPokemonCards(data)
        setPages(response.headers['num_pages'])
    })
    .catch( (error) => {
        console.log(error)
        alert("Erro getPokemonCards!")
    })
}

export const editOwnsCard = async (cardId) => {
    axios.put(editOwnsCardUrl+cardId)
    .then( (response) => {
        console.log("#editOwnsCard")
        console.log(response)
    })
    .catch( (error) => {
        console.log(error)
        alert("Erro editOwnsCard!")
    })
}