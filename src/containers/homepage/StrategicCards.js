import React from 'react';
import { connect } from 'react-redux';
import { strategicCardsAction } from '../../redux/Action';
import './StrategicCards.css';
import axios from 'axios';
function StrategicCards ({data,dispatch}){
    React.useEffect(()=>{
        dispatch(strategicCardsAction())
    },[])
    console.log(data)
    return(
        <div className = "cards-content-container">
          {
              data&& data.isLoading?(<h2>...Loading</h2>):
              data.errorMessage ? (<h2>{data.errorMessage}</h2>):
              (
                  <div className="auctions-card-data">
                      {
                          data.fetchedData && data.fetchedData.cards &&
                           data.fetchedData.cards.map((cards,index) =>{
                               return(
                                <div className={index%2===0?"auction-card-content":"auction-card-content odd-card"} style={{backgroundImage: `url(${cards.image})`}}> 
                                <div className="auction-card-btn-container">
                                  <span className="auctions-card-name">{cards.name}</span>
                                <button className="auction-card-button">Click Here</button>
                                </div>
                            </div>
                               )
                           })
                      }
                      </div>
              )
          }
        </div>
    )
}
const mapStateToProps = state =>({
        data : state.strategicCardsReducer
})
export default connect(mapStateToProps) (StrategicCards)