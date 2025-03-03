import axios from "axios";
import { API_DJANGO } from './../constants'

const energyTypesUrl = API_DJANGO+"/energy-types"
const getPokemonsUrl = API_DJANGO+"/pokemon"
const getPokemonTypesUrl = API_DJANGO+"/pokemon-types"

export const getAllEnergyTypes = async (setEnergyTypes) => {
    axios.get(energyTypesUrl)
    .then( (response) => {
        const data = response.data  
        console.log(data)
        setEnergyTypes(data)
    })
    .catch( (error) => {
        console.log(error)
        alert("Item NÃO enviado!")
    })
}

export const getAllPokemons = async (setPokemonsArray, setPages, page, size) => {
    axios.get(getPokemonsUrl+`?page=${page}&size=${size}`)
    .then((response) => {
        const data = response.data  
        console.log(data)

        setPokemonsArray(data)

        setPages(response.headers['num_pages'])
    })
    .catch( (error) => {
        console.log(error)
        alert("Item NÃO enviado!")
    })
}

export const getPokemonTypes = async (setPokemonType) => {
    axios.get(getPokemonTypesUrl)
    .then((response) => {
        const data = response.data  
        console.log(data)
        setPokemonType(data)
    })
    .catch( (error) => {
        console.log(error)
        alert("Item NÃO enviado!")
    })

}



