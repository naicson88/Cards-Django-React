import { useHistory } from "react-router-dom";


export const getQueryParam = (param) => {
    const urlSearchString = window.location.search;
    const params = new URLSearchParams(urlSearchString);
    return params.get(param)
}


export const handleRedirect = (path) => {
    const history = useHistory();
    history.push(path)
}

export const handlePokemonIdFormat = (id) => {

    let strId = id.toString()
    console.log(strId.length)
    while(strId.length < 4){
        strId = "0"+strId;
    }
    return "#"+strId
}

