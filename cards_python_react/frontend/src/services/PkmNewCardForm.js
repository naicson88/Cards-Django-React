import axios from "axios";
import { API_DJANGO } from './../constants'

const createCardUrl = API_DJANGO+"card/create"


export const createPkmTcgCard = async (card) => {
    axios.post(createCardUrl, card)
    .then( (response) => {
        const data = response.data  
        console.log(data)
        alert("Card criado com sucesso")
    })
    .catch( (error) => {
        console.log(error)
        alert("Item NÃO enviado!")
    })
     // Dependências vazias ([]) significa que isso será chamado apenas uma vez após a montagem
}