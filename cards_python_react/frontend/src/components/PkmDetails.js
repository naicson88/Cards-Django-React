import React, { useState, useEffect,  Component} from 'react';
import HeaderContainer from "./HeaderContainer"
import "./../../static/css/PkmDetails.css"
import { getQueryParam, handlePokemonIdFormat } from './../utils'

import { 
    getPokemonById
 } from './../services/PkmDetailsService'

const PkmDetails = () => {
    
    const [isPokemonLoaded, setIsPokemonLoaded] = useState(false)

    const [pokemon, setPokemon] = useState({})
    const [pokemonType, setPokemonType] = useState([])
    const [formattedId, setFormattedId] = useState('')


    useEffect(() => {   
        const loadPokemon = async () => {
           const id = getQueryParam('id');
           await getPokemonById(setPokemon, setPokemonType, id); 
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

            <HeaderContainer text={pokemon.name} />  

           <div className="container-cards" style={{backgroundColor: '#fff'}}>
             
                    <div className='first-row'>
                    <div className='image'>
                        <img src={pokemon.img} ></img> 
                    </div>

                    <div className='description'>
                        <table>
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
                        <div className='card-attack'>
                            <div className='card-attack-title'>Leech Seed (20) </div>
                            <div className='card-attack-desc'>
                                Heal 20 damage from this Pokémon.
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className='second-row'>
                    <div>
                        hahahah

                    </div>
                </div>
            </div> 
        </div>      
    )
}

export default PkmDetails