
import React, { useState, useEffect,  Component} from 'react';
import "./../../static/css/PkmNewPokemonForm.css"
import HeaderContainer from "./HeaderContainer"
import { Button, Form, FormGroup, Input, Label, Row, Col, Toast } from "reactstrap";
import { createPokemon, editPokemon } from './../services/PkmNewPokemonFormService'
import { getPokemonTypes } from './../services/PkmHomePageService'
import { getPokemonById } from './../services/PkmDetailsService'
import HomeButton from "../shared/HomeButton";
import { getQueryParam, handlePokemonIdFormat,  } from './../utils'


const PkmNewPokemonForm = () => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [evolves_from, setEvolves_from] = useState('')
    const [evolves_to, setEvolves_to] = useState('')
    const [img, setImg] = useState('')
    const [type, setType] = useState('')
    const [species, setSpecies] = useState('')
    const [height, SetHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [hp, setHp] = useState('')
    const [attack, setAttack] = useState('')
    const [defense, setDefense] = useState('')
    const [sp_atk, setSp_atk] = useState('')
    const [sp_def, setSp_def] = useState('')
    const [speed, setSpeed] = useState('')
    const [pokemon, setPokemon] = useState({})
    const [pokemonType, setPokemonType] = useState([])

    const queryParamId = getQueryParam('id'); 

    let newPkm = {
        id: 0,
        name: '',
        evolves_from: null,
        evolves_to: null,
        img: '',
        type: [],
        species: '',
        height: '',
        weight: '',
        hp:0,
        attack:0,
        defense:0,
        sp_atk:0,
        sp_def:0,
        speed:0,
    }

    
    const handleSubmit = e =>{
        e.preventDefault()
        newPkm.id = Number(e.target.id.value.trim());
        newPkm.name = e.target.name.value.trim();
        if(e.target.evolves_from.value.trim() != "")
           newPkm.evolves_from = e.target.evolves_from.value.trim()
        if(e.target.evolves_to.value.trim())
            newPkm.evolves_to = e.target.evolves_to.value.trim();
        newPkm.img = e.target.img.value.trim();
        newPkm.species = e.target.species.value.trim();
        newPkm.height = e.target.height.value.trim();
        newPkm.weight = e.target.weight.value.trim();
        newPkm.hp = Number(e.target.hp.value.trim());
        newPkm.attack = Number(e.target.attack.value.trim());
        newPkm.defense = Number(e.target.defense.value.trim());
        newPkm.sp_atk = Number(e.target.sp_atk.value.trim());
        newPkm.sp_def = Number(e.target.sp_def.value.trim());
        newPkm.speed = Number(e.target.speed.value.trim());
        
        if(e.target.setType.value){
            newPkm.type.push( Number(e.target.setType.value))
        }
        if(e.target.setType2.value){
            newPkm.type.push( Number(e.target.setType2.value))
        }
        console.log(newPkm)
        queryParamId ? editPokemon(newPkm) : createPokemon(newPkm)
    }

       const handleFormEdit = async () => {
            setId(pokemon.id)
            setName(pokemon.name)
            setEvolves_from(pokemon.evolves_from)
            setEvolves_to(pokemon.evolves_to)
            setImg(pokemon.img)
            // setType('')
            setSpecies(pokemon.species)
            SetHeight(pokemon.height)
            setWeight(pokemon.weight)
            setHp(pokemon.hp)
            setAttack(pokemon.attack)
            setDefense(pokemon.defense)   
            setSp_atk(pokemon.sp_atk)
            setSp_def(pokemon.sp_def)
            setSpeed(pokemon.speed)
        }


        useEffect(() => {   
            const loadContent = async () => {
                

               if(queryParamId){
                    await getPokemonById(setPokemon, setPokemonType, queryParamId);
               }
             
               await getPokemonTypes(setPokemonType);
            }
    
            loadContent().catch(console.error); 
             
          }, []);

          useEffect(() => {   
            const loadContent = async () => {
               handleFormEdit()
            }
            loadContent().catch(console.error); 
             
          }, [pokemon]);



    return (
    <div>
        <HeaderContainer text={'New Pokmeon'} />  
        <div>
                 <HomeButton path={`/pkm-home`} text={'Home'}></HomeButton>
                 
            </div>
        <div className="div-form form-new-pokemon">
        <Form style={{marginTop: "10px"}} onSubmit={handleSubmit}>

                <FormGroup >
                    <Row className="row-cols-sm-auto g-6 align-items-center" style={{marginTop: "20px"}}>
                        <Col>
                            <Label for="id">ID:</Label>
                            <Input type="text" name="id" defaultValue={id} />
                        </Col>
                    </Row>
                    
                    </FormGroup>

                    <FormGroup >
                    <Row className="row-cols-lg-auto g-6 align-items-center" style={{marginTop: "20px"}}>
                        <Col>
                                <Label for="setId">Name:</Label>
                                <Input type="text" name="name" defaultValue={name}/>
                            </Col>
                            <Col>
                                <Label for="species">Species:</Label>
                                <Input type="text" name="species" defaultValue={species}/>
                            </Col>
                       
                    </Row>
                      
                    </FormGroup>
                                      
                 <FormGroup>
                    <Row className="row-cols-lg-auto g-6 align-items-center"  style={{marginTop: "20px"}}>
                        <Col>
                            <Label for="setType">Set Type:</Label>
                            <Input
                                type="select"
                                name="setType"
                            >
                            <option value={null}></option>
                            {pokemonType.map((type, index) => 
                        
                                <option value={type.id}  key={index}>
                                    {/* <img src={type.img} className='select-type-icon' /> &nbsp;  */}
                                    {type.name}
                                </option>
                            )}
                            
                            </Input>
                        </Col>
                        <Col>
                            <Label for="setType2">Set Type 2:</Label>
                                <Input
                                    type="select"
                                    name="setType2"
                                >
                                 <option value={null}></option>
                                 {pokemonType.map((type, index) => 
                                    <option value={type.id} key={index} >
                                        {/* <img src={type.img} className='select-type-icon' /> &nbsp;  */}
                                        {type.name}
                                    </option>
                            )}
                                </Input>
                        </Col>
                    </Row>
                    </FormGroup> 

                    <FormGroup>
                        <Label for="img">Image:</Label>
                        <Input
                            type="text"
                            name="img"  
                            defaultValue={img}                        
                        />
                    </FormGroup>

                    <FormGroup>
                        <Row className="row-cols-lg-auto g-6 align-items-center" style={{marginTop: "20px"}}>
                            <Col>
                                    <Label for="height">Height:</Label>
                                    <Input type="text" name="height"  defaultValue={height}          />
                                </Col>
                                <Col>
                                    <Label for="weight">Weight:</Label>
                                    <Input type="text" name="weight"  defaultValue={weight}          />
                                </Col>
                                <Col>
                                    <Label for="hp">HP:</Label>
                                    <Input type="text" name="hp"  defaultValue={hp}          />
                                </Col>
                        
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row className="row-cols-lg-auto g-6 align-items-center" style={{marginTop: "20px"}}>
                            <Col>
                                    <Label for="attack">Attack:</Label>
                                    <Input type="text" name="attack"  defaultValue={attack}/>
                                </Col>
                                <Col>
                                    <Label for="defense">Defense:</Label>
                                    <Input type="text" name="defense"  defaultValue={defense}/>
                                </Col>
                                <Col>
                                    <Label for="sp_atk">Sp_atk:</Label>
                                    <Input type="text" name="sp_atk"  defaultValue={sp_atk}/>
                                </Col>
                                <Col>
                                    <Label for="sp_def">Sp_def:</Label>
                                    <Input type="text" name="sp_def"  defaultValue={sp_def}/>
                                </Col>
                                <Col>
                                    <Label for="speed">Speed:</Label>
                                    <Input type="text" name="speed" defaultValue={speed} />
                                </Col>
                                <Col>
                                    <Label for="evolves_from">Evolves_from:</Label>
                                    <Input type="text" name="evolves_from" defaultValue={evolves_from}/>
                                </Col>
                                <Col>
                                    <Label for="evolves_to">Evolves_to:</Label>
                                    <Input type="text" name="evolves_to"  defaultValue={evolves_to}/>
                                </Col>
                        
                        </Row>
                    </FormGroup>

                    <Button color="primary" style={{marginLeft: "43%", marginTop: "20px"}} type="submit">Confirm</Button>
         </Form>
        </div>

    </div>
       
    )
}

export default PkmNewPokemonForm