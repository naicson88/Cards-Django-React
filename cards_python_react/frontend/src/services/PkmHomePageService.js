import axios from "axios";
import { API_DJANGO } from './../constants'

const energyTypesUrl = API_DJANGO+"/energy-types"
const getPokemonsUrl = API_DJANGO+"/pokemon"



export const getAllEnergyTypes = (setEnergyTypes) => {
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
     // Dependências vazias ([]) significa que isso será chamado apenas uma vez após a montagem
}

export const getAllPokemons = (setPokemonsArray) => {
    axios.get(getPokemonsUrl)
    .then((response) => {
        const data = response.data  
        console.log(data)
        setPokemonsArray(data)
    })
    .catch( (error) => {
        console.log(error)
        alert("Item NÃO enviado!")
    })
     // Dependências vazias ([]) significa que isso será chamado apenas uma vez após a montagem
}

