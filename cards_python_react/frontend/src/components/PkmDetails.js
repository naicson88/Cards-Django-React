import React, { useState, useEffect,  Component} from 'react';
import HeaderContainer from "./HeaderContainer"
import "./../../static/css/PkmDetails.css"

const PkmDetails = () => {
    return (
        <div>
           <HeaderContainer text={'Bulbasaur'} />   
           <div className="container-cards" style={{backgroundColor: '#fff'}}>
                <div className='first-row'>
                    <div className='image'>
                        <img src="https://img.pokemondb.net/artwork/large/bulbasaur.jpg" ></img> 
                    </div>

                    <div className='description'>
                        <table>
                            <tr>
                                <th style={{width:'25%'}}></th>
                                <th></th> 
                            </tr>
                            <tr>
                                <td className='td-1'>Number :</td>
                                <td className='td-2'>0001</td>
                            </tr>
                            <tr>
                                <td className='td-1'>Type :</td>
                                <td className='td-2'>
                                    <span className="span-color span-color-GRASS">Grass </span>                             
                                    <span className="span-color span-color-POISON">Poison</span>                            
                                </td>
                            </tr>
                            <tr>
                                <td className='td-1'>Height :</td>
                                <td className='td-2'>0.7 m (2′04″)</td>
                            </tr>
                            <tr>
                                <td className='td-1'>Weight :</td>
                                <td className='td-2'>6.9 kg (15.2 lbs)</td>
                            </tr>
                        </table>
                        <table>
                            <tr>
                                <th style={{width:'25%'}}></th>
                                <th></th> 
                            </tr>
                            <tr>
                                <td className='td-1'>HP :</td>
                                <td className='td-2'>45</td>
                            </tr>
                            <tr>
                                <td className='td-1'>Attack :</td>
                                <td className='td-2'>49</td>
                            </tr>
                            <tr>
                                <td className='td-1'>Defense :</td>
                                <td className='td-2'>49</td>
                            </tr>
                            <tr>
                                <td className='td-1'>Sp. Atk :</td>
                                <td className='td-2'>65</td>
                            </tr>
                            <tr>
                                <td className='td-1'>Sp. Def :</td>
                                <td className='td-2'>65</td>
                            </tr>
                            <tr>
                                <td className='td-1'>Speed :</td>
                                <td className='td-2'>65</td>
                            </tr>
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
                        {/* <div className="single-card-pokemon">
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
                        </div>  */}
                    </div>
                </div>
            </div> 
        </div>      
    )
}

export default PkmDetails