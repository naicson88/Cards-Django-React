
import React, { useState, useEffect,  Component} from 'react';

import "./../../static/css/PkmHomePage.css"
import Cards from "./Cards"
import HeaderContainer from "./HeaderContainer"
import { getAllEnergyTypes, getAllPokemons } from './../services/PkmHomePageService'

const PkmHomePage = () => {
    const [energyTypes, setEnergyTypes] = useState([])
    const [pokemonsArray, setPokemonsArray] = useState([])

    useEffect(() => {   
        const loadContent = async () => {
           await getAllEnergyTypes(setEnergyTypes);
           await getAllPokemons(setPokemonsArray)
        }

        loadContent().catch(console.error); 
         
      }, []);
    
    const handleClickPokemon = () => { console.log("happy")}

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
                    <div key={index} className="single-card-pokemon" onClick={handleClickPokemon}>
                        <div className="card-img">
                            <img src={pokemon.img} ></img> 
                        </div>
                        <div className="pokemon-description">
                            <span className='pokemon-id'>{pokemon.id}</span>
                            <div className='pokemon-name' onClick={ () => window.location.href=`/pkm-details?id=${pokemon.id}`}>{pokemon.name}</div>

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