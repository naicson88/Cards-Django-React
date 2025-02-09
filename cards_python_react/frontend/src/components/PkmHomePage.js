
import React, { useState, useEffect } from 'react';
import { API_DJANGO } from './../constants'
import { useHistory } from "react-router-dom";
import axios from "axios";
const PkmHomePage = () => {

    const history = useHistory();
    const energyTypes = API_DJANGO+"/energy-types"

    useEffect(() => {
        console.log(energyTypes)
        axios.get(energyTypes)
        .then((response) => {
            console.log(response);
            alert("Item enviado com sucesso!!")
        })
        .catch( (error) => {
            console.log(error)
            alert("Item NÃO enviado!")
        })
         // Dependências vazias ([]) significa que isso será chamado apenas uma vez após a montagem
         
      }, []);

    return(
        <div>
            <h1>Hello, World</h1>
        </div>
    )
}

export default PkmHomePage