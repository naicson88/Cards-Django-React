import axios from "axios";
import { API_DJANGO } from './../constants'


const pokemonByIdUrl = API_DJANGO+"/pokemon/"
const pokemonAttacksUrl = API_DJANGO+"card/pokemon-attacks/"

export const getPokemonById =  async (setPokemon, setPokemonType, id)  => {
    axios.get(pokemonByIdUrl+id+'/')
    .then( (response) => {
        console.log("#getPokemonById")
        const data = response.data  
        setPokemonType(data.type)
        setPokemon(data)
    })
    .catch( (error) => {
        console.log(error)
        alert("Item NÃO enviado!")
    })
     // Dependências vazias ([]) significa que isso será chamado apenas uma vez após a montagem
}

export const getPokemonAttacks = async (setPokemonAttacks, pokemonId) => {
    axios.get(pokemonAttacksUrl+pokemonId)
    .then( (response) => {
        console.log("#getPokemonAttacks")
        const data = response.data  
        setPokemonAttacks(data)
    })
    .catch( (error) => {
        console.log(error)
        alert("Item NÃO enviado!")
    })
     // Dependências vazias ([]) significa que isso será chamado apenas uma vez após a montagem
}