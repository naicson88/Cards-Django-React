import axios from "axios";
import { API_DJANGO } from './../constants'

const createPokemonUrl = API_DJANGO+"pokemon/create"

export const createPokemon = async (pokemon) => {
    axios.post(createPokemonUrl, pokemon)
    .then( (response) => {
        const data = response.data  
        console.log(data)
        alert("Cadastrado com Sucesso!")
    })
    .catch( (error) => {
        console.log(error)
        alert("Item NÃO enviado!")
    })
     // Dependências vazias ([]) significa que isso será chamado apenas uma vez após a montagem
}