import {applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
export const DOHVATI_PODATKE = "DOHVATI_PODATKE";

const pocetnoStanje = {
    nasaData: {
        title: '',
        url:'',
        explanation:' '
    }
};

const reducer = (state= pocetnoStanje, action)=>{
    switch (action.type) {
        case DOHVATI_PODATKE:
            return {nasaData: action.payload };
        default:
            return state;
    }
}

export function getNasaData (){
    return async (dispatch) => {
        const response = await fetch ('https://api.nasa.gov/planetary/apod?api_key=YFjeaQHYNmiMzXRSKjxxf7i9rHOaM8CGpTFlfL04');
        const responseData = await response.json();

        console.log(responseData);
        const fetchedNasaData= {
            title: responseData.title,
            url: responseData.url,
            explanation: responseData.explanation
        };
        dispatch ({type: DOHVATI_PODATKE, payload: fetchedNasaData})
    }
}

//YFjeaQHYNmiMzXRSKjxxf7i9rHOaM8CGpTFlfL04

 const skladiste = createStore(reducer, applyMiddleware(thunk));

 export default skladiste;