import { connect } from 'react-redux';
import FeatureProductShow from './FeatureProductShow';

function FeatureProducts ({featureData}){
    return(
        <div className="auction-items-container">
        <div className="auction-item-cards-container">
         {
             featureData
             .filter((item,index) => index<3)
             .map(item =>
                <FeatureProductShow key = {item.id} items = {item}/>
                )
         }
        </div>
        </div>
    )
}
const mapStateToProps = state => ({
    featureData : state.featureItemReducer.featureProductData.items
})
export default connect(mapStateToProps)(FeatureProducts)