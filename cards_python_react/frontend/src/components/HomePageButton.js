import React from "react";
import { Button} from "reactstrap";
const HomePageButton = () => {

    const goHomePage = () => {
        window.location = 'http://127.0.0.1:8000'
    }

    return(
        <div>
            <Button color="success" onClick={goHomePage}> ← Home</Button>
        </div>
    )
}

export default HomePageButton