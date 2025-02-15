import React, { useState, useEffect,  Component} from 'react';
import HeaderContainer from "./HeaderContainer"
import HomeButton from "../shared/HomeButton";
import "./../../static/css/PkmCardDetails.css"
import { getQueryParam, handlePokemonIdFormat,  } from '../utils'


const PkmCardDetails = () => {

    return (
        <div>
             <div>
                 <HomeButton path={`/pkm-home`} ></HomeButton>
            </div>
            <br></br>

              <div id="container-card-details">
                    <div className='card-details-left-div'>
                        <img src='https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SV3PT5/SV3PT5_EN_2.png'></img>
                    </div>
                    <div className='card-details-right-div'>
                        <div className='card-details-info'>
                           <div className='card-details-info-header'>
                                Bulbasaur
                           </div>
                           <div className='card-details-info-row-1'>
                                <span style={{fontSize: '18px'}}>Stage: 1</span>
                                <span> <span style={{fontSize: 'small'}}>HP</span>100 ❤</span>                         
                           </div>
                           <div className='card-details-info-row-2'>
                                <h6>Attacks</h6>
                                <div className='card-details-info-attack-cards'>

                                    <table className='pkm-card-table'>
                                        <tbody>
                                           <tr>
                                                <th style={{width:'25%', textAlign: 'left'}}>
                                                    ❤❤😁😛
                                                </th>
                                                <th className='card-details-info-attack-cards-th2'>
                                                     Vine Whip
                                                </th>
                                                <th className='card-details-info-attack-cards-th3'>
                                                     120
                                                </th>
                                           </tr>
                                        </tbody>
                                    </table>
                                    <span className='span-attack-details'>
                                            card-details-info-attack-cards-th3  card-details-info-attack-cards-th 
                                    </span>                                 
                                </div>

                                <div className='card-details-info-attack-cards'>

                                    <table className='pkm-card-table'>
                                        <tbody>
                                        <tr>
                                                <th style={{width:'25%', textAlign: 'left'}}>
                                                    ❤
                                                </th>
                                                <th className='card-details-info-attack-cards-th2'>
                                                    Vine Whip
                                                </th>
                                                <th className='card-details-info-attack-cards-th3'>
                                                    10
                                                </th>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <span className='span-attack-details'>
                                            
                                    </span>                                 
                                    </div>
                           </div>

                           <div  className='card-details-info-row-3'>
                                <table className='pkm-card-table-2'>
                                    <tbody>
                                        <tr>
                                            <th>
                                                Weakness
                                            </th>
                                            <th>
                                                 Resistance
                                            </th>
                                            <th>
                                                Retreat Cost
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>
                                                 ❤
                                            </th>
                                            <th>
                                                ❤
                                            </th>
                                            <th>
                                                 ❤
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className='card-details-info-pkm-desc'>
                                While it is young, it uses the nutrients that are stored in the seed on its back in order to grow.
                                </div>
                           </div>
                        </div>
                    </div>  
              </div>    
        </div>
    )
}

export default PkmCardDetails