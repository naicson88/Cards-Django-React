import axios from "axios";
import { API_DJANGO } from './../constants'

const createPokemonUrl = API_DJANGO+"pokemon/create"
const editPokemonUrl = API_DJANGO+"pokemon/edit"
const createPokemonCrawlerUrl = API_DJANGO+"crawler/crawler-new-pokemon"

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

export const createPokemonCrawler = async (setPokemon) => {
    axios.get(createPokemonCrawlerUrl)
    .then( (response) => {
        const data = response.data  
        setPokemon(data)
        alert("Cadastrado com Sucesso!")
    })
    .catch( (error) => {
        console.log(error)
        alert("Item NÃO enviado!")
    })
}

export const editPokemon = async (pokemon) => {
    axios.put(editPokemonUrl, pokemon)
    .then( (response) => {
        const data = response.data  
        console.log(data)
        alert("Editado com Sucesso!")
    })
    .catch( (error) => {
        console.log(error)
        alert("Item NÃO enviado!")
    })
     // Dependências vazias ([]) significa que isso será chamado apenas uma vez após a montagem
}