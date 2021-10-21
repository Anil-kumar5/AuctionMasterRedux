import { combineReducers } from "redux";
import axios from 'axios';
import { useState } from 'react';
import {
    FEATURE_FETCH_FAILURE,
    FEATURE_FETCH_REQ,
    FEATURE_FETCH_SUCCESS,
    FETCH_STRATEGIC_CARDS_FAILURE,
    FETCH_STRATEGIC_CARDS_REQ,
    FETCH_STRATEGIC_CARDS_SUCCESS,
    FOOTER_FETCH_FAILURE,
    FOOTER_FETCH_REQ,
    FOOTER_FETCH_SUCCESS
} from "./ActionType";

const strategicCardsData = {
    isLoading: false,
    fetchedData: [],
    errorMessage: ''
}

export const strategicCardsReducer = (state = strategicCardsData, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_STRATEGIC_CARDS_REQ: return {
            isLoading: true
        }
        case FETCH_STRATEGIC_CARDS_SUCCESS: return {
            isLoading: false,
            fetchedData: payload,
            errorMessage: ''
        }
        case FETCH_STRATEGIC_CARDS_FAILURE: return {
            isLoading: false,
            fetchedData: [],
            errorMessage: payload
        }
        default: return state
    }
}
// for footer
const footerData = {
    isLoading: false,
    dataFetched: [],
    fetchError: ''
}
export const footerDataReducer = (state = footerData, action) => {
    switch (action.type) {
        case FOOTER_FETCH_REQ: return {
            isLoading: true
        }
        case FOOTER_FETCH_SUCCESS: return {
            isLoading: false,
            dataFetched: action.payload,
            fetchError: ''
        }
        case FOOTER_FETCH_FAILURE: return {
            isLoading: false,
            dataFetched: [],
            fetchError: action.payload
        }
        default: return state
    }
}
// feature items

// const featureData = {
//     isLoading : false,
//     featureFetchedData : [],
//     featureErrorMessage :''
// }
// export const featureFetchReducer = (state = featureData , action) =>{
//     switch(action.type){
//         case FEATURE_FETCH_REQ : return{
//             isLoading : true
//         }
//         case FEATURE_FETCH_SUCCESS  :return{
//             isLoading : false,
//             featureFetchedData : action.payload,
//             featureErrorMessage : ''
//         }
//         case FEATURE_FETCH_FAILURE : return{
//             isLoading : false,
//             featureFetchedData :[],
//             featureErrorMessage : action.payload
//         }
//         default : return state
//     }
// }

const featureData  = {
    featureProductData : []
}
axios.get('https://api.npoint.io/e7211c1380a34f5dd0e9')
.then(resp => {
    featureData.featureProductData = resp.data
})

export const featureItemReducer = (state = featureData , action) =>{
    switch(action.type){
         default : return state
    }
}
export const rootReducer = combineReducers({
    strategicCardsReducer,
    footerDataReducer,
    // featureFetchReducer
    featureItemReducer
})