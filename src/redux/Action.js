import axios from 'axios';
import { FEATURE_FETCH_FAILURE, FEATURE_FETCH_REQ, FEATURE_FETCH_SUCCESS, FETCH_STRATEGIC_CARDS_FAILURE, FETCH_STRATEGIC_CARDS_REQ, FETCH_STRATEGIC_CARDS_SUCCESS, FOOTER_FETCH_FAILURE, FOOTER_FETCH_REQ, FOOTER_FETCH_SUCCESS, PLACE_HOLDER } from './ActionType';

export const strategicFetchRequest = () =>({
   type:FETCH_STRATEGIC_CARDS_REQ
})
export const strategicFetchSuccess = success => ({
    type : FETCH_STRATEGIC_CARDS_SUCCESS,
    payload : success
}) 
export const strategicFetchFailure = fail => ({
    type : FETCH_STRATEGIC_CARDS_FAILURE,
    payload : fail
})
export const strategicCardsAction = () =>{
    return (dispatch) =>{
    dispatch(strategicFetchRequest)
    axios.get('https://api.npoint.io/3a6795c2bfbca872aeb4')
    .then(resp => {
      dispatch(strategicFetchSuccess(resp.data))
    })
    .catch(er =>{
        dispatch(strategicFetchFailure(er.message))
    })
    
}}

// for footer

const footerFetchReq = () =>({
    type : FOOTER_FETCH_REQ
})
const footerFetchSuccess = success =>({
    type : FOOTER_FETCH_SUCCESS,
    payload : success
})
const footerFetchFailure = failure =>({
    type : FOOTER_FETCH_FAILURE,
    payload : failure
})

export const footerFetch = () =>{
    return(dispatch) =>{
        dispatch(footerFetchReq)
        axios.get('https://api.npoint.io/d67ffaa78b9b8accf406')
        .then (response => dispatch(footerFetchSuccess(response.data)))
        .catch(er => dispatch(footerFetchFailure(er.message)))
    }
}

// feature items
// const featureFetchReq = () =>({
//   type : FEATURE_FETCH_REQ
// })
// const featureFetchSuccess = success => ({
//     type : FEATURE_FETCH_SUCCESS,
//     payload : success
// })
// const featureFetchFailure = failure => ({
//     type : FEATURE_FETCH_FAILURE,
//     payload : failure
// })

// export const featureFetch = () =>{
//     return(dispatch) =>{
//         dispatch(featureFetchReq)
//         axios.get('https://api.npoint.io/e7211c1380a34f5dd0e9')
//         .then (resp =>dispatch(featureFetchSuccess(resp.data)))
//         .catch( er => dispatch(featureFetchFailure(er.message)))
//     }
// }

export const placeHolderAction = something =>{
    return{
        type : PLACE_HOLDER,
        payload : something
    }
}
