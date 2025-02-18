import React, { useState, useEffect,  Component} from 'react';
import HeaderContainer from "./HeaderContainer"
import "./../../static/css/PkmDetails.css"
import { getQueryParam, handlePokemonIdFormat,  } from './../utils'
import HomeButton from "../shared/HomeButton";

import { 
    getPokemonById,
    getPokemonAttacks,
    getPokemonEvolutions,
    getPokemonCards
 } from './../services/PkmDetailsService'

const PkmDetails = () => {
    
    const [isPokemonLoaded, setIsPokemonLoaded] = useState(false)

    const [pokemon, setPokemon] = useState({})
    const [pokemonType, setPokemonType] = useState([])
    const [pokemonAttacks, setPokemonAttacks] = useState([])
    const [pokemonEvolution, setPokemonEvolution] = useState([])
    const [pokemonCards, setPokemonCards] = useState([])
    const [formattedId, setFormattedId] = useState('')


    useEffect(() => {   
        const loadPokemon = async () => {
           const id = getQueryParam('id');
           await getPokemonById(setPokemon, setPokemonType, id); 
           await getPokemonAttacks(setPokemonAttacks, id)
           await getPokemonEvolutions(setPokemonEvolution, id)
           await getPokemonCards(setPokemonCards, id)
           setIsPokemonLoaded(true)
          }

        loadPokemon().catch(console.error); 
    }, []);

    useEffect(() => {   
        if(isPokemonLoaded){
            const id = handlePokemonIdFormat(pokemon.id)
            setFormattedId(id)
        }
    }, [pokemon]);

    return (
        <div>

            <div style={{display: 'flex'}}>
                 <HomeButton path={`/pkm-home`} text={'Home'}></HomeButton> /
                 <HomeButton path={`/pkm-new-pokemon?id=${pokemon?.id}`} text={'Edit'}></HomeButton>
            </div>

            <HeaderContainer text={pokemon.name} />  

           <div id="container-pokemon-details">
             
                <div className='first-row'>
                    <div className='image'>
                        <img src={pokemon.img} ></img> 
                    </div>

                    <div className='description'>
                        <table className='pkm-table'>
                            <tbody>
                            <tr>
                                <th style={{width:'25%'}}></th>
                                <th></th> 
                            </tr>
                            <tr>
                                <td className='td-1'>Number :</td>
                                <td className='td-2'>{formattedId}</td>
                            </tr>
                            <tr>
                                <td className='td-1'>Type :</td>
                                <td className='td-2'>
                                    { 
                                        pokemonType.map((type, index) => 
                                            <span key={index} className={`span-color span-color-${type.name}`}>{type.name} </span> 
                                        )      
                                    }               
                                </td>
                            </tr>
                            <tr>
                                <td className='td-1'>Species :</td>
                                <td className='td-2'>{pokemon.species}</td>
                            </tr>
                            <tr>
                                <td className='td-1'>Height :</td>
                                <td className='td-2'>{pokemon.height}</td>
                            </tr>
                            <tr>
                                <td className='td-1'>Weight :</td>
                                <td className='td-2'>{pokemon.weight}</td>
                            </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                            <tr>
                                <th style={{width:'25%'}}></th>
                                <th></th> 
                            </tr>
                            <tr>
                                <td className='td-1'>HP :</td>
                                <td className='td-2'>{pokemon.hp}</td>
                            </tr>
                            <tr>
                                <td className='td-1'>Attack :</td>
                                <td className='td-2'>{pokemon.attack}</td>
                            </tr>
                            <tr>
                                <td className='td-1'>Defense :</td>
                                <td className='td-2'>{pokemon.defense}</td>
                            </tr>
                            <tr>
                                <td className='td-1'>Sp. Atk :</td>
                                <td className='td-2'>{pokemon.sp_atk}</td>
                            </tr>
                            <tr>
                                <td className='td-1'>Sp. Def :</td>
                                <td className='td-2'>{pokemon.sp_def}</td>
                            </tr>
                            <tr>
                                <td className='td-1'>Speed :</td>
                                <td className='td-2'>{pokemon.speed}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='attacks'>
                        <h3>Attacks</h3>
                        {
                        pokemonAttacks.map((attack, index) => 
                            <div className="card-attack"   key={index}>
                                <div className={`card-attack-title  span-color-${pokemonType[0].name}`}>
                                    {attack.name} ({attack.hit_point}) 
                                </div>
                                <div className='card-attack-desc'>
                                    {attack.description}
                                </div>
                            </div>
                        )}

                    </div>
                </div>

                <h3 className='evolutions-h'>Evolutions</h3>
                <div className='second-row'>

                    {pokemonEvolution.map((evolution, index) =>
                    <>
                       <div className='single-card-pokemon-details' key={index}>

                        <div className="card-img-evolution">
                            <img className='poke-img' src={evolution.img} ></img> 

                        </div>
                        <div className="pokemon-description-evolution">
                            <span className='pokemon-id'>{handlePokemonIdFormat(evolution.id)}</span>
                            <span className='pokemon-name' onClick={ () => window.location.href=`/pkm-details?id=${evolution.id}`}>{evolution.name}</span>
                        </div>
                        <span className='pokemon-types'>
                            <span className={evolution.type[0].name} ><b> {evolution.type[0].presentation_name}</b> </span> 
                            { pokemon.type.length > 1 && (
                            <span className={evolution.type[1].name}> · <b>{evolution.type[1].presentation_name}</b>  </span> 
                            )}  
                        </span>
                        

                        </div>  
                        {
                            pokemonEvolution.length - 1 != index && (
                                <div className='arrow-img'>
                                    <img src='./../../static/images/icons/right-arrow.png'></img>
                                </div>
                            )
                        }   
                       
                    </>

                    )}
                     

                </div>
                 
                <h3 className='evolutions-h'>Cards</h3>   
                <div className='third-row'>
                    
                    {pokemonCards.map((card, index) => 
                        <div className='single-card-tcg' key={index}> 
                            <img src={card.image_small} loading="lazy" onClick={ () => window.location.href=`/pkm-card?id=${card.id}`}/>
                        </div>
                    )}

                </div>
          </div> 
        </div>      
    )
}

export default PkmDetails