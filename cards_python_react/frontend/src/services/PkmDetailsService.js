import axios from "axios";
import { API_DJANGO } from './../constants'


const pokemonByIdUrl = API_DJANGO+"/pokemon/"

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