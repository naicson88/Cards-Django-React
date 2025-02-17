
import React, { useState, useEffect,  Component} from 'react';
import "./../../static/css/PkmNewPokemonForm.css"
import HeaderContainer from "./HeaderContainer"
import { Button, Form, FormGroup, Input, Label, Row, Col, Toast } from "reactstrap";
import { createPokemon } from './../services/PkmNewPokemonFormService'
import { getAllEnergyTypes } from './../services/PkmHomePageService'

const PkmNewPokemonForm = () => {

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
        createPokemon(newPkm)
    }

    const [energyTypes, setEnergyTypes] = useState([])

        useEffect(() => {   
            const loadContent = async () => {
               await getAllEnergyTypes(setEnergyTypes);
            }
    
            loadContent().catch(console.error); 
             
          }, []);



    return (
    <div>
        <HeaderContainer text={'New Pokmeon'} />  

        <div className="div-form form-new-pokemon">
        <Form style={{marginTop: "10px"}} onSubmit={handleSubmit}>

                <FormGroup >
                    <Row className="row-cols-sm-auto g-6 align-items-center" style={{marginTop: "20px"}}>
                        <Col>
                            <Label for="id">ID:</Label>
                            <Input type="text" name="id" />
                        </Col>
                    </Row>
                    
                    </FormGroup>

                    <FormGroup >
                    <Row className="row-cols-lg-auto g-6 align-items-center" style={{marginTop: "20px"}}>
                        <Col>
                                <Label for="setId">Name:</Label>
                                <Input type="text" name="name" />
                            </Col>
                            <Col>
                                <Label for="species">Species:</Label>
                                <Input type="text" name="species" />
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
                            {energyTypes.map((type, index) => 
                        
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
                                 {energyTypes.map((type, index) => 
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
                        />
                    </FormGroup>

                    <FormGroup>
                        <Row className="row-cols-lg-auto g-6 align-items-center" style={{marginTop: "20px"}}>
                            <Col>
                                    <Label for="height">Height:</Label>
                                    <Input type="text" name="height" />
                                </Col>
                                <Col>
                                    <Label for="weight">Weight:</Label>
                                    <Input type="text" name="weight" />
                                </Col>
                                <Col>
                                    <Label for="hp">HP:</Label>
                                    <Input type="text" name="hp" />
                                </Col>
                        
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row className="row-cols-lg-auto g-6 align-items-center" style={{marginTop: "20px"}}>
                            <Col>
                                    <Label for="attack">Attack:</Label>
                                    <Input type="text" name="attack" />
                                </Col>
                                <Col>
                                    <Label for="defense">Defense:</Label>
                                    <Input type="text" name="defense" />
                                </Col>
                                <Col>
                                    <Label for="sp_atk">Sp_atk:</Label>
                                    <Input type="text" name="sp_atk" />
                                </Col>
                                <Col>
                                    <Label for="sp_def">Sp_def:</Label>
                                    <Input type="text" name="sp_def" />
                                </Col>
                                <Col>
                                    <Label for="speed">Speed:</Label>
                                    <Input type="text" name="speed" />
                                </Col>
                                <Col>
                                    <Label for="evolves_from">Evolves_from:</Label>
                                    <Input type="text" name="evolves_from" />
                                </Col>
                                <Col>
                                    <Label for="evolves_to">Evolves_to:</Label>
                                    <Input type="text" name="evolves_to" />
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