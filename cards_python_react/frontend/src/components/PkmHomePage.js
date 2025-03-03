
import React, { useState, useEffect,  Component} from 'react';

import "./../../static/css/PkmHomePage.css"
import Cards from "./Cards"
import HeaderContainer from "./HeaderContainer"
import { getAllEnergyTypes, getAllPokemons } from './../services/PkmHomePageService'
import { getQueryParam, handlePokemonIdFormat,  } from './../utils'
import HomeButton from "../shared/HomeButton";
import { Pagination , PaginationItem , PaginationLink } from "reactstrap";

const PkmHomePage = () => {
    const [energyTypes, setEnergyTypes] = useState([])
    const [pokemonsArray, setPokemonsArray] = useState([])
    const [pages, setPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [items, setItems] = useState([])

    useEffect(() => {   
        const loadContent = async () => {
           await getAllEnergyTypes(setEnergyTypes);
           await getAllPokemons(setPokemonsArray, setPages, currentPage, 15)
        }

        loadContent().catch(console.error); 
         
      }, []);

      useEffect(() => {   
        const loadContent = async () => {
           await handlePagination()
        }

        loadContent().catch(console.error); 
         
      }, [pages]);
    
    const handleClickPokemon = () => { console.log("happy")}
    

    const handlePagination = async () => {
        let arr = []
        for(let i = 0; i < pages; i++){
            arr.push(i+1);
        }
        setItems(arr)
    }

    const handlePageChange = async (page) => {
        console.log(page)
        setCurrentPage(page)
        await getAllPokemons(setPokemonsArray, setPages, page, 15)
    }

    return(
        <div>
            <HeaderContainer text={'Cards Pokemon'} />    

            <div className="container-cards">
                {  energyTypes.map((card, index) =>  <Cards key={index} card={card}/> ) }              
            </div>  
            <br></br> 
            <HeaderContainer text={'Pokemons'} />    
            <div className='home-btn-new-pokemon'>
                <HomeButton path={`/pkm-new-pokemon`} text={'New Pokemon'}></HomeButton>
            </div>
            <div className="container-cards pokemon-container">
           
                {pokemonsArray.map((pokemon, index ) => (
                    <div key={index} className="single-card-pokemon" onClick={handleClickPokemon}>
                        <div className="card-img">
                            <img src={pokemon.img} ></img> 
                        </div>
                        <div className="pokemon-description">
                            <span className='pokemon-id'>{handlePokemonIdFormat(pokemon.id)}</span>
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
            <div>

                <Pagination aria-label="Page navigation example" >
                    <PaginationItem disabled>
                        <PaginationLink
                        first
                        href="#"
                        />
                    </PaginationItem>
                    <PaginationItem disabled>
                        <PaginationLink
                        href="#"
                        previous
                        />
                    </PaginationItem>

                    {pages > 0 && items.map((item) => 
                        
                        <PaginationItem  key={item} className={item === currentPage ? 'active' : ''} onClick={() => handlePageChange(item)}>
                            <PaginationLink >
                            {item}
                            </PaginationLink>
                        </PaginationItem>
                    )}

                    {/* <PaginationItem active>
                        <PaginationLink href="#">
                        1
                        </PaginationLink>
                    </PaginationItem> */}
                    
                    <PaginationItem>
                        <PaginationLink
                        href="#"
                        next
                        />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                        href="#"
                        last
                        />
                    </PaginationItem>
                </Pagination>
            </div>
        </div>
    )
}

export default PkmHomePage