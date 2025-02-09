
import React, { useState, useEffect,  Component} from 'react';
import { API_DJANGO } from './../constants'
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cards from "./Cards"
import HeaderContainer from "./HeaderContainer"

const PkmHomePage = () => {

    const history = useHistory();
    const energyTypesUrl = API_DJANGO+"/energy-types"

    const [energyTypes, setEnergyTypes] = useState([])

    useEffect(() => {

        axios.get(energyTypesUrl)
        .then((response) => {
            const data = response.data  
            console.log(data)
            setEnergyTypes(data)
        })
        .catch( (error) => {
            console.log(error)
            alert("Item NÃO enviado!")
        })
         // Dependências vazias ([]) significa que isso será chamado apenas uma vez após a montagem
         
      }, []);

    //   useEffect(() => {
    //     console.log(energyTypes);  // Agora você verá o valor atualizado
    //   }, [energyTypes]);

    return(
        <div>
            <HeaderContainer text={'Cards Pokemon'} />    

            <div className="container-cards">
                {  energyTypes.map((card, index) =>  <Cards key={index} card={card}/> ) }              
            </div>   
        </div>
    )
}

export default PkmHomePage