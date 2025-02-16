
import axios from "axios";
import { API_DJANGO } from './../constants'


const cardByIdUrl = API_DJANGO+"card/"


export const getCardById =  async (setCardTcg, id)  => {
    axios.get(cardByIdUrl+id)
    .then( (response) => {
        console.log("#getPokemonById")
        const data = response.data  
        console.log(data)
        setCardTcg(data)
    })
    .catch( (error) => {
        console.log(error)
        alert("Item NÃO enviado!")
    })
}