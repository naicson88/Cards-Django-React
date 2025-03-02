import React, { useState, useEffect,  Component} from 'react';
import { Button, Form, FormGroup, Input, Label, Row, Col, Toast } from "reactstrap";
import "./../../static/css/PkmHomePage.css"
import Cards from "./Cards"
import HeaderContainer from "./HeaderContainer"
import { getAllEnergyTypes } from './../services/PkmHomePageService'
import { createPkmTcgCard, createPkmTcgAdminAPI } from './../services/PkmNewCardForm'
import { getQueryParam, handlePokemonIdFormat,  } from './../utils'
import HomeButton from "../shared/HomeButton";

const PkmNewCardForm = () => {

    const queryParamId = getQueryParam('id'); 
    const queryParamPokemonApiId = getQueryParam('api_id'); 

    const [id, setId] = useState('');
    const [number, setNumber] = useState('');
    const [api_id, setApi_id] = useState('');
    const [card_name, setCard_name] = useState('');
    const [hp, setHp] = useState('');
    const [stage, setStage] = useState('');
    const [weaknesses, setWeaknesses] = useState('');
    const [resistance, setResistance] = useState('');
    const [retreat, setRetreat] = useState('');
    const [pokemon_description, setPokemon_description] = useState('');
    const [image_small, setImage_small] = useState('');
    const [image_large, setImage_large] = useState('');
    const [ex_rule, setEx_rule] = useState('');
    const [ability_name, setAbility_name] = useState('');
    const [ability_description, setAbility_description] = useState('');
    const [pokemon_id, setPokemon_id] = useState('');
    const [energyTypes, setEnergyTypes] = useState([])
    const [attack, setAttack] = useState([
        {
            name: null,
            description: null,
            hit_point: null,
            cost: null
        },
        {
            name: null,
            description: null,
            hit_point: null,
            cost: null
        }
    ]);


    const newAtkObj1 =             
    {
        name: null,
        description: null,
        hit_point: null,
        cost: null
    }
    const newAtkObj2 =             
    {
        name: null,
        description: null,
        hit_point: null,
        cost: null
    }

    const newCard = {
        id: null,
        number: null,
        api_id: null,
        card_name: null,
        pokemon_type: null,
        hp: null,
        stage: null,
        weaknesses: null,
        resistance: null,
        retreat: null,
        pokemon_description: null,
        image_small: null,
        image_large: null,
        ex_rule: null,
        ability_name: null,
        ability_description: null,
        attack: [],
        pokemon_id: null
    }

    const handleSubmit = e =>{
        e.preventDefault()
       // newCard.id = e.target.id.value.trim();
        newCard.number = e.target.number.value.trim();
        newCard.api_id = e.target.api_id.value.trim();
        newCard.card_name = e.target.card_name.value.trim();
        newCard.pokemon_type = Number(e.target.pokemon_type.value.trim());
        debugger
        if(newCard.pokemon_type == "1"){
            alert("Type invalido")
            return false
        }
        newCard.hp = Number(e.target.hp.value.trim());
        newCard.stage = e.target.stage.value.trim();
        newCard.weaknesses = e.target.weaknesses.value.trim();
        newCard.resistance = e.target.resistance.value.trim();
        newCard.retreat = e.target.retreat.value.trim();
        newCard.pokemon_description = e.target.pokemon_description.value.trim();
        newCard.image_small = e.target.image_small.value.trim();
        newCard.image_large = e.target.image_large.value.trim();
        newCard.ex_rule = e.target.ex_rule.value.trim();
        console.log(newCard.ex_rule)
        newCard.ability_name = e.target.ability_name.value.trim();
        newCard.ability_description = e.target.ability_description.value.trim();
        newCard.pokemon_id = Number(e.target.pokemon_id.value.trim());

        if(e.target.atk_name0.value){
            newAtkObj1.name = e.target.atk_name0.value.trim();
            newAtkObj1.description = e.target.atk_description0.value.trim();
            newAtkObj1.hit_point = Number(e.target.hit_point0.value.trim());
            newAtkObj1.cost = e.target.cost0.value.trim();
            newCard.attack.push(newAtkObj1)
        }

        if(e.target.atk_name1 && e.target.atk_name1.value){
            newAtkObj2.name = e.target.atk_name1.value.trim();
            newAtkObj2.description = e.target.atk_description1.value.trim();
            newAtkObj2.hit_point = Number(e.target.hit_point1.value.trim());
            newAtkObj2.cost = e.target.cost1.value.trim();
            newCard.attack.push(newAtkObj2)
        }
        console.log(newCard)
        createPkmTcgCard(newCard)
    }

    const handleCreateCardAdminAPI = async () => {

        const apiId = queryParamPokemonApiId
        if(apiId){
            const resp = await createPkmTcgAdminAPI(apiId)
            console.log(resp)
            
            setNumber
            setApi_id(resp.api_id)
            setCard_name(resp.card_name)
            setStage(resp.stage)
            setWeaknesses(resp.weaknesses)
            setHp(resp.hp)
            //setResistance(resp.resistance)
            setRetreat(resp.retreat)
            setPokemon_description(resp.pokemon_description)
            setImage_small(resp.image_small)
            setImage_large(resp.image_large)
            setEx_rule(resp.ex_rule)
            setAbility_name(resp.ability_name)
            setAbility_description(resp.ability_description)
            setPokemon_id(resp.pokemon_id)
            setAttack(resp.attack)

        } else {
            alert("API ID não encontrada")
        }
       

    }

    useEffect(() => {   
        const loadContent = async () => {
            
            if(queryParamId){
               return null
            }
            
            await getAllEnergyTypes(setEnergyTypes);
        }

        loadContent().catch(console.error); 
            
        }, []);
    

    return (
        <div>
             <HeaderContainer text={'New Card TCG'} />  
        <div>
                 <HomeButton path={`/pkm-home`} text={'Home'}></HomeButton>
                 
            </div>
        <div className="div-form form-new-pokemon">
        <Form style={{marginTop: "10px"}} onSubmit={handleSubmit}>

                <FormGroup >
                    <Row className="row-cols-sm-auto g-6 align-items-center" style={{marginTop: "20px"}}>
                        <Col>
                            <Label for="id">ID:</Label>
                            <Input type="text" name="id" defaultValue={id} bsSize="sm"/>
                        </Col>
                        <div>
                            <Button  color="primary" onClick={handleCreateCardAdminAPI}>
                            Create API
                            </Button>
                        </div>   
                    </Row>
                    
                    </FormGroup>

                    <FormGroup >
                        <Row className="row-cols-lg-auto g-6 align-items-center" style={{marginTop: "20px"}}>
                            <Col>
                                    <Label for="setId">Number:</Label>
                                    <Input size="17" type="text" name="number" defaultValue={number}/>
                                </Col>
                                <Col>
                                    <Label for="species">Pokemon ID:</Label>
                                    <Input size="17" type="text" name="pokemon_id" defaultValue={pokemon_id}/>
                                </Col>
                                <Col>
                                    <Label for="species">Api_id:</Label>
                                    <Input size="17" type="text" name="api_id" defaultValue={api_id}/>
                                </Col>
                        
                        </Row>
                        
                    </FormGroup>
                                      
                 <FormGroup>
                    <Row className="row-cols-lg-auto g-6 align-items-center"  style={{marginTop: "20px"}}>
                        <Col md={4}>
                            <Label for="pokemon_type">Pokemon Type</Label>
                            <Input
                                type="select"
                                name="pokemon_type"
                            >
                            <option value={null}>1</option>
                            {energyTypes.map((type, index) => 
                        
                                <option value={type.id}  key={index}>
                                    {/* <img src={type.img} className='select-type-icon' /> &nbsp;  */}
                                    {type.name}
                                </option>
                            )}
                            
                            </Input>
                        </Col>
                        <Col md={6}>
                                <Label for="species">Card name:</Label>
                                <Input size="25" type="text" name="card_name" defaultValue={card_name}/>
                        </Col>
                        <Col sm={2}>
                                <Label for="species">HP:</Label>
                                <Input size="8" type="text" name="hp" defaultValue={hp}/>
                        </Col>
                        <Col sm={2}>
                                <Label for="species">Stage:</Label>
                                <Input size="8" type="text" name="stage" defaultValue={stage}/>
                        </Col>
                    </Row>
                    </FormGroup> 

                    <FormGroup >
                        <Row className="row-cols-lg-auto g-6 align-items-center" style={{marginTop: "20px"}}>
                            <Col>
                                    <Label for="setId">Weaknesses:</Label>
                                    <Input size="17" type="text" name="weaknesses" defaultValue={weaknesses}/>
                            </Col>
                            <Col>
                                <Label for="species">Resistance:</Label>
                                <Input size="17" type="text" name="resistance" defaultValue={resistance}/>
                            </Col>
                            <Col>
                                <Label for="species">Retreat:</Label>
                                <Input size="17" type="text" name="retreat" defaultValue={retreat}/>
                            </Col>
                        
                        </Row>
                        
                    </FormGroup>     
                    <FormGroup >
                        <Row className="row-cols-lg-auto g-6 align-items-center" style={{marginTop: "20px"}}>
                            <Col>
                                    <Label for="setId">Description:</Label>
                                    <Input size="20" type="textarea" name="pokemon_description" defaultValue={pokemon_description} />
                            </Col>  
                            <Col>
                                    <Label for="setId">EX rule:</Label>
                                    <Input size="20" type="textarea" name="ex_rule" defaultValue={ex_rule}/>
                            </Col>                       
                        </Row>
                        
                    </FormGroup>   
                    <FormGroup >
                        <Row className="row-cols-lg-auto g-6 align-items-center" style={{marginTop: "20px"}}>
                            <Col>
                                <Label for="setId">Image small:</Label>
                                <Input size="17" type="text" name="image_small" defaultValue={image_small}/>
                            </Col>
                            <Col>
                                <Label for="species">Image large:</Label>
                                <Input size="17" type="text" name="image_large" defaultValue={image_large}/>
                            </Col>
                        
                        </Row>
                        
                    </FormGroup>      
                    <FormGroup >
                        <Row className="row-cols-lg-auto g-6 align-items-center" style={{marginTop: "20px"}}>
                            <Col>
                                <Label for="setId">Ability Name:</Label>
                                <Input size="17" type="text" name="ability_name" defaultValue={ability_name}/>
                            </Col>
                            <Col>
                                <Label for="species">Ability Description:</Label>
                                <Input size="17" type="text" name="ability_description" defaultValue={ability_description}/>
                            </Col>
                        
                        </Row>
                        
                    </FormGroup> 
                    {attack.map((atk, index)=> 
                            <FormGroup style={{background: '#1ea7fd', padding: '5px'}} key={index}>
                            <Row className="row-cols-lg-auto g-6 align-items-center" style={{marginTop: "20px"}}>
                                <Col>
                                    <Label for="setId">Name:</Label>
                                    <Input size="17" type="text" name={`atk_name${index}`} defaultValue={atk.name}/>
                                </Col>
                                <Col>
                                    <Label for="species">Hit point:</Label>
                                    <Input size="17" type="text" name={`hit_point${index}`}defaultValue={atk.hit_point}/>
                                </Col>
                                <Col>
                                    <Label for="species">Cost:</Label>
                                    <Input size="17" type="text" name={`cost${index}`} defaultValue={atk.cost}/>
                                </Col>
                                <Col>
                                    <Label for="species">Description:</Label>
                                    <Input size="40" type="text" name={`atk_description${index}`} defaultValue={atk.description}/>
                                </Col>
                            
                            </Row>
                            
                        </FormGroup> 
                    )}



                    <Button color="primary" style={{marginLeft: "43%", marginTop: "20px"}} type="submit">Confirm</Button>
            </Form>
            </div>
        </div>
    )
}

export default PkmNewCardForm