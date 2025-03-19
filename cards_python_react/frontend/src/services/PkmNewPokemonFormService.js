import axios from "axios";
import { API_DJANGO, API_ADMIN_KOTLIN } from './../constants'

const createPokemonUrl = API_DJANGO+"pokemon/create"
const editPokemonUrl = API_DJANGO+"pokemon/edit"
const createPokemonCrawlerUrl = API_DJANGO+"crawler/crawler-new-pokemon"
const createPkmCardsUrl =  API_ADMIN_KOTLIN+"v1/admin/pkm/cards/"

export const createPokemon = async (pokemon) => {
    axios.post(createPokemonUrl, pokemon)
    .then( async (response) => {
        const data = response.data  
        console.log(data)
        await createPkmCards(data.name, data.id)
        alert("Cadastrado com Sucesso!")
    })
    .catch( (error) => {
        console.log(error)
        alert("Item NÃO enviado!")
    })
}

const createPkmCards = async (pkmName, pkmId) => {
    axios.post(createPkmCardsUrl+`${pkmName}/${pkmId}`)
    .then( (response) => {
        const data = response.data  
        console.log(data)
        alert("Cadastrado com Sucesso!")
    })
    .catch( (error) => {
        console.log(error)
        alert("Erro #createPkmCardsFromAPI")
    })
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