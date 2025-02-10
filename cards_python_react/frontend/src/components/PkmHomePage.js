
import React, { useState, useEffect,  Component} from 'react';

import { useHistory } from "react-router-dom";
import "./../../static/css/PkmHomePage.css"
import Cards from "./Cards"
import HeaderContainer from "./HeaderContainer"
import { getAllEnergyTypes, getAllPokemons } from './../services/PkmHomePageService'

const PkmHomePage = () => {

    const history = useHistory();


    const [energyTypes, setEnergyTypes] = useState([])
    const [pokemonsArray, setPokemonsArray] = useState([])

    useEffect(() => {   
        getAllEnergyTypes(setEnergyTypes);
        getAllPokemons(setPokemonsArray)
         
      }, []);
    
    const handleClickPokemon = () => { console.log("happy")}

    //   useEffect(() => {
    //     console.log(energyTypes);  // Agora você verá o valor atualizado
    //   }, [energyTypes]);

    return(
        <div>
            <HeaderContainer text={'Cards Pokemon'} />    

            <div className="container-cards">
                {  energyTypes.map((card, index) =>  <Cards key={index} card={card}/> ) }              
            </div>  
            <br></br> 
            <HeaderContainer text={'Pokemons'} />    
           
            <div className="container-cards pokemon-container">
                <div className="single-card-pokemon" onClick={handleClickPokemon}>
                    <div className="card-img">
                         <img src="https://img.pokemondb.net/artwork/large/bulbasaur.jpg" ></img> 
                    </div>
                    <div className="pokemon-description">
                       <span className='pokemon-id'>#0001</span>
                       <span className='pokemon-name'>Bulbasaur</span>
                       <span className='pokemon-types'>Grass · Poison</span>
                    </div>
                </div>              
            </div>   
        </div>
    )
}

export default PkmHomePage