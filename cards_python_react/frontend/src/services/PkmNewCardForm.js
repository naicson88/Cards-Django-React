import axios from "axios";
import { API_DJANGO } from './../constants'

const createCardUrl = API_DJANGO+"card/create"
const createCardAdminAPI = "http://localhost:9090/v1/admin/pkm/card/"

export const createPkmTcgCard = async (card) => {
    axios.post(createCardUrl, card)
    .then( (response) => {
        const data = response.data  
        console.log(data)
        alert("Card criado com sucesso")
        return response.data
    })
    .catch( (error) => {
        console.log(error)
        alert("Item NÃO enviado!")
    })
}
     export const createPkmTcgAdminAPI = async ( cardId) => {
       try{
            const resp =  await axios.post(createCardAdminAPI+cardId);
            const data = resp.data 
 
            return data;

        } catch (error) {
            console.log(error);
            alert("Item NÃO enviado!");
            throw error; // Propaga o erro para o chamador
        }
    }