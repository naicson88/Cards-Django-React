import React from "react";
import HeaderContainer from "./HeaderContainer"
import HomePageButton from "./HomePageButton"
import { Button, Form, FormGroup, Input, Label, Row, Col, Toast } from "reactstrap";
import axios from "axios";
import {API_DJANGO} from "../constants"
import "./../../static/css/ExcelDeckForm.css"


const ExcelDeckForm = () => {

    let deckObj = {
        pk: 0,
        setId: 0,
        nome: "",
        isBasedDeck: false,
        isSpeedDuel: false,
        setType: "",
        setCode: ""
    }

    const handleSubmit = e =>{
        e.preventDefault()
        deckObj.setId = e.target.setId.value
        deckObj.nome = e.target.nome.value
        deckObj.isBasedDeck = JSON.parse(e.target.isBasedDeck.value); 
        deckObj.isSpeedDuel = JSON.parse(e.target.isSpeedDuel.value); 
        deckObj.setType = e.target.setType.value
        deckObj.setCode = e.target.setCode.value

       if(isValidObj)
            sendDeckObjectToAPI(deckObj)
    }

    const sendDeckObjectToAPI = (obj) => {
        axios.post(API_DJANGO+"/create-deck", obj)
        .then((response) => {
            console.log(response);
            alert("Item enviado com sucesso!!")
        })
        .catch( (error) => {
            console.log(error)
            alert("Item NÃO enviado!")
        })
    }

    const isValidObj = (obj) => {
        if(obj.setId == null || obj.setId == 0){
            alert("Invalid Set ID")
            return false;
        }          
        if(obj.nome == null || obj.nome.trim() == ""){
            alert("Invalid Nome")
            return false;
        }           
        if(obj.setCode == null || obj.setCode.trim() == ""){
            alert("Invalid Set Code")
            return false;
        }

        return true
           
    }

    return (
        <div className="main-div">
           <HeaderContainer text={'EXCEL DECK FORM'} />    
      
            <div className="div-form">

            <HomePageButton />
                <Form style={{marginTop: "10px"}} onSubmit={handleSubmit}>
                    <FormGroup >
                        <Label for="setId">Set ID:</Label>
                        <Input
                            type="text"
                            name="setId"
                            style={{width: "40%"}}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="nome">Nome:</Label>
                        <Input
                            type="text"
                            name="nome"                          
                        />
                    </FormGroup>
                    <Row className="row-cols-lg-auto g-6 align-items-center" style={{marginTop: "20px"}}>
                        <Col>
                            <Label for="isBasedDeck">Is Based Deck:</Label>
                            <Input
                                type="select"
                                name="isBasedDeck"
                                style={{width: "100%"}}
                                
                            >
                                <option value={true}>TRUE</option>
                                <option value={false}>FALSE</option>
                            </Input>
                        </Col>
                        <Col>
                            <Label for="isSpeedDuel">Is Speed Duel:</Label>
                            <Input
                                type="select"
                                name="isSpeedDuel"
                                style={{width: "100%"}}
                                
                            >
                                <option value={true}>TRUE</option>
                                <option value={false}>FALSE</option>
                            </Input>
                        </Col>                     
                    </Row>
                  
                    <FormGroup>
                    <Row className="row-cols-lg-auto g-6 align-items-center"  style={{marginTop: "20px"}}>
                        <Col>
                            <Label for="setType">Set Type:</Label>
                            <Input
                                type="select"
                                name="setType"
                              
                           
                            >
                            <option value={"BOX"}>BOX</option>
                            <option value={"DECK"}>DECK</option>
                            <option value={"TIN"}>TIN</option>
                            <option value={"BOOSTER"}>BOOSTER</option>
                            </Input>
                        </Col>
                        <Col>
                            <Label for="setCode">Set Code:</Label>
                            <Input
                                type="text"
                                name="setCode"                           
                            />
                        </Col>
                    </Row>
                    </FormGroup>
                    <Button color="primary" style={{marginLeft: "43%", marginTop: "20px"}} type="submit">Confirm</Button>
                </Form>
            </div>
        </div>
    )
}

export default ExcelDeckForm