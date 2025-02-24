import React, { useState, useEffect,  Component} from 'react';
import HomeButton from "../shared/HomeButton";
import "./../../static/css/PkmCardDetails.css"
import { getQueryParam, handlePokemonIdFormat,  } from '../utils'
import { 
    getCardById,
 } from './../services/PkmCardDetailsService'

const PkmCardDetails = () => {
    const [cardTcg, setCardTcg] = useState({})

    useEffect(() => {   
        const loadCard = async () => {
           const id = getQueryParam('id');
           await getCardById(setCardTcg, id); 
          }

          loadCard().catch(console.error); 
    }, []);
    
    const handleIcon = (cost) => {
        if(cost == null || cost == undefined)
            return null
        
        const words = cost.split(" - ");
        let resp = ''
        words.map((word, index) => {
            resp += "<img src='/../../static/images/icons/"+word+".png' "+"class='icons-img' style='width: 25px; height: 25px'/> " 
        })

        return resp
    }

    const handleWeakness = (weakness) => {
        if(weakness == null || weakness == undefined)
            return null

        const split = weakness.split(" - ")

        return "<img src='/../../static/images/icons/"+split[0].toUpperCase()+".png' class='icons-img' style='width: 20px; height: 20px'/> <b>"+split[1]+"</b>" 
    }

    return (
        <div>
             <div>
                 <HomeButton path={`/pkm-home`} text={'Home'}></HomeButton>
            </div>
            <br></br>

              <div id="container-card-details">
                    <div className='card-details-left-div'>
                        <img src={cardTcg.image_small}></img>
                    </div>
                    <div className='card-details-right-div'>
                        <div className='card-details-info'>
                           <div className='card-details-info-header'>
                                {cardTcg.card_name}
                           </div>
                           <div className='card-details-info-row-1'>
                                <span style={{fontSize: '18px'}}>Stage: {cardTcg.stage}</span>
                                <span> 
                                    <span style={{fontSize: 'small'}}>HP</span>{cardTcg.hp} &nbsp; &nbsp;
                                    <img src={`/../../static/images/icons/${cardTcg.pokemon_type?.name}.png`} className='img-icon-grande'/>
                                </span>                         
                           </div>
                           <div className='card-details-info-row-2'>
                                {cardTcg.ability_name && (
                                    <div className='card-details-info-attack-cards'>
                                        <div className='card-details-inf-hability'>
                                            <div className='card-details-inf-hability-icon'>
                                                Hability
                                            </div>
                                            <div className='card-details-inf-hability-name'>
                                                {cardTcg.ability_name}
                                            </div>
                                    
                                        </div>
                                        <span className='span-attack-details'>
                                            {cardTcg.ability_description}
                                        </span>                                 
                                    </div>
                                )}

                                <h6></h6>
                                <div className='card-details-info-attack-cards'>
                                    {cardTcg.attack?.map((atk, index) =>
                                          <>
                                        <table className='pkm-card-table' key={index}>
                                            <tbody>
                                                <tr>
                                                    <th style={{width:'25%', textAlign: 'left'}} dangerouslySetInnerHTML={{__html: handleIcon(atk.cost)}}>
                                                        
                                                    </th>
                                                    <th className='card-details-info-attack-cards-th2'>
                                                            {atk.name}
                                                    </th>
                                                    <th className='card-details-info-attack-cards-th3'>
                                                            {atk.hit_point}
                                                    </th>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <span className='span-attack-details'>
                                                {atk.description}
                                        </span>  
                                        </>                        
                                    )}
  

                                </div>

                                {cardTcg.ex_rule && (
                                    <div className='card-details-info-attack-cards gx'>
                                        <div className='card-details-inf-hability'>
                                            <div className='card-details-inf-gx-icon'>
                                                GX Rule
                                            </div>                           
                                        </div>
                                        <span className='span-attack-details'>
                                        {cardTcg.ex_rule}</span>                                 
                                    </div>
                                )}

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
                                            <td dangerouslySetInnerHTML={{__html: handleWeakness(cardTcg.weakness)}}>
                                            
                                            </td>
                                            <td dangerouslySetInnerHTML={{__html: handleWeakness(cardTcg.resistance)}}>
                                                
                                            </td>
                                            <td dangerouslySetInnerHTML={{__html: handleIcon(cardTcg.retreat)}}>
                                                
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className='card-details-info-pkm-desc'>
                                    {cardTcg.pokemon_description}
                                </div>
                           </div>

                           <div className='card-details-info-row-4'>
                                <span>Number: <b>{cardTcg.number}</b></span>
                                <span>Api_ID: <b>{cardTcg.api_id}</b></span>
                                
                           </div>
                        </div>
                    </div>  
              </div>    
        </div>
    )
}

export default PkmCardDetails