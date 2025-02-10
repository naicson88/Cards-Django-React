import React, { useState, useEffect,  Component} from 'react';
import HeaderContainer from "./HeaderContainer"
import "./../../static/css/PkmDetails.css"

const PkmDetails = () => {
    return (
        <div>
           <HeaderContainer text={'Bulbasaur'} />   
           <div className="container-cards">
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
                                <td className='td-2'>Grass - Poison</td>
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
                </div>
            </div> 
        </div>      
    )
}

export default PkmDetails