
import React, { useState, useEffect,  Component} from 'react';

import { useHistory } from "react-router-dom";
import "./../../static/css/PkmHomePage.css"
import Cards from "./Cards"
import HeaderContainer from "./HeaderContainer"
import { getAllEnergyTypes, getAllPokemons } from './../services/PkmHomePageService'

const PkmHomePage = () => {

    const history = useHistory();

    const colors = ['GRASS', 'ROCK']

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

    const handlePokemonTypeColor = () => {
        let text = ''

    }

    return(
        <div>
            <HeaderContainer text={'Cards Pokemon'} />    

            <div className="container-cards">
                {  energyTypes.map((card, index) =>  <Cards key={index} card={card}/> ) }              
            </div>  
            <br></br> 
            <HeaderContainer text={'Pokemons'} />    
           
            <div className="container-cards pokemon-container">
                {pokemonsArray.map((pokemon, index ) => (
                    <div className="single-card-pokemon" onClick={handleClickPokemon}>
                        <div className="card-img">
                            <img src={pokemon.img} ></img> 
                        </div>
                        <div className="pokemon-description">
                            <span className='pokemon-id'>{pokemon.id}</span>
                            <span className='pokemon-name'>{pokemon.name}</span>

                            <span className='pokemon-types'>
                                    <span className={pokemon.type[0].name}> {pokemon.type[0].presentation_name} </span> 
                                 { pokemon.type.length > 1 && (
                                    <span className={pokemon.type[1].name}> · {pokemon.type[1].presentation_name} </span> 
                                 )}   
                            </span>
                        </div>
                     </div>  
                ))}
             
            </div>   
        </div>
    )
}

export default PkmHomePage