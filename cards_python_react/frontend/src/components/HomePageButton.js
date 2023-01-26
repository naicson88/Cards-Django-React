import React from "react";
import { Button} from "reactstrap";
import API_DJANGO from './../constants'
import { useHistory } from "react-router-dom";
const HomePageButton = () => {

    const history = useHistory();

    const goHomePage = () => {
        history.push('/') 
    }

    return(
        <div>
            <Button color="success" onClick={goHomePage}> ← Home</Button>
        </div>
    )
}

export default HomePageButton